const axios = require('axios');

class BaseApi {
  static async createAxiosInstance() {
    return axios.create({
      headers: {
        Authorization: 'bearer 90ae0fc4-0114-49d2-ab92-009b5897f177',
      },
    });
  }
}

module.exports = { BaseApi };
