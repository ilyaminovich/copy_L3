const { BrowserNavigation } = require('../src/helpers/browserNavigation');
const { initEnv } = require('./envs.conf');
const { reportAggregator } = require('./reporter.conf');

exports.config = {
  specs: ['./tests/mocha/*.js'],
  exclude: [
  ],
  capabilities: [{
    maxInstances: initEnv.rp_ui.threads,
    browserName: 'chrome',
    acceptInsecureCerts: true,
  }],
  timeouts: {
    short: 5000,
    default: 30000,
    long: 50000,
  },
  logLevel: 'silent',
  baseUrl: initEnv.rp_ui.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 150000,
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
