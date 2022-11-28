const { argv } = require('yargs');

exports.initEnv = {
  rp_ui: {
    baseUrl: argv.appurl,
    user: argv.user,
    password: argv.password,
    threads: argv.threads,
    parallel: argv.parallel,
  },
};
