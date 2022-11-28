const { DashboardApi } = require('../service/apiActions/dashboardApi');
const { GetData } = require('./getData');

class DashboardHelper {
  static async getDashboardIdByName(dashboardName) {
    const dashboardData = await DashboardApi.getDashboardData();
    return GetData.getIdFromData(dashboardData, dashboardName);
  }

  static async checkThatDashboardEntityIsCreated(dashboardName) {
    const dashboardData = await DashboardApi.getDashboardData();
    return GetData.checkThatNameExistsInData(dashboardData, dashboardName);
  }

  static async getWidgetDataFromDashboard(dashboardId) {
    const dashboardData = await DashboardApi.getDashboardDataById(dashboardId);
    return dashboardData.data.widgets;
  }
}

module.exports = { DashboardHelper };
