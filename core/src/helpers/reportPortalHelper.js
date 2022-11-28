const RPClient = require('@reportportal/client-javascript');
const axios = require('axios');
const { BaseApi } = require('../service/apiActions/baseApi');

class ReportPortalHelper extends BaseApi {
  static rpClient = new RPClient({
    token: '90ae0fc4-0114-49d2-ab92-009b5897f177',
    endpoint: 'http://localhost:8080/api/v1',
    launch: 'superadmin_TEST_EXAMPLE',
    project: 'hometask_project',
  });
  /*eslint-disable*/
  static async getLaunchDataRequest(url) {
    return axios.get(url, {
      headers: {
        Authorization: `bearer ${this.rpClient.token}`,
      },
    });
  }
}

module.exports = { ReportPortalHelper };
