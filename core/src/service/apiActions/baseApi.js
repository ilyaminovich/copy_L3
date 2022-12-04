const axios = require('axios');

class BaseApi {
  static async createAxiosInstance() {
    return axios.create({
      headers: {
        Authorization: 'bearer 5a742b8b-71fb-44ab-9330-61b59326ed72',
      },
    });
  }
}

module.exports = { BaseApi };
