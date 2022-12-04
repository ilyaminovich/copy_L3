const { BrowserNavigation } = require('../src/helpers/browserNavigation');
const { initEnv } = require('./envs.conf');
const { reportAggregator } = require('./reporter.conf');

exports.config = {
  specs: [
    './tests/features/**/*.feature',
  ],
  port: '4444',
  exclude: [
  ],
  capabilities: [{
    maxInstances: initEnv.rp_ui.threads || 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-dev-shm-usage',
        '--headless',
        '--disable-gpu',
        '--window-size=1440,735'
      ],
    }
  }],
  timeouts: {
    short: 5000,
    default: 30000,
    long: 50000,
  },
  logLevel: 'silent',
  bail: 0,
  baseUrl: initEnv.rp_ui.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver', 'docker'],
  framework: 'cucumber',
  reporters: ['spec',
    ['html-nice', {
      outputDir: './reports/html-reports/',
      filename: 'report.html',
      reportTitle: 'Test Report Title',
      linkScreenshots: true,
      // to show the report in a browser when done
      showInBrowser: true,
      collapseTests: false,
      // to turn on screenshots after every test
      useOnAfterCommandForScreenshot: false,
    },
    ],
  ],

  cucumberOpts: {
    require: ['./business/stepDefinitions/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },

  dockerOptions: {
    image: 'selenium/standalone-chrome',
    healthCheck: 'http://localhost:4444',
    options: {
      p: ['4444:4444'],
      shmSize: '2g'
    }
  },

  onPrepare() {
    reportAggregator.clean();
  },

  onComplete() {
    (async () => {
      await reportAggregator.createReport();
    })();
  },

  async after() {
    await BrowserNavigation.closeWindow();
  },

  // eslint-disable-next-line no-undef
  async before() {
    await browser.maximizeWindow();
  },
};
