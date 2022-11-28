const fs = require('fs');

class DataWrapper {
  static pathToLocalLaunchData = './core/src/dataStorage/apiLaunchesExpectedResult.json';

  static pathToRequestedLaunchData = './core/src/dataStorage/copyJson.json';

  static pathToLocalTestRunData = './core/src/dataStorage/testRunStorage.js';

  static async getLaunchData() {
    return JSON.parse(fs.readFileSync(this.pathToLocalLaunchData));
  }

  static async getDataFromCopy() {
    return JSON.parse(fs.readFileSync(this.pathToRequestedLaunchData));
  }
}
module.exports = { DataWrapper };
