const { initEnv } = require('../../../configs/envs.conf');

class Url {
  static dashboardData = `${initEnv.rp_ui.baseUrl}api/v1/testbot_personal/dashboard`;

  static widgetData = `${initEnv.rp_ui.baseUrl}api/v1/testbot_personal/widget`;

  static widgetDataShared = `${initEnv.rp_ui.baseUrl}api/v1/testbot_personal/widget/shared`;
}

module.exports = { Url };
