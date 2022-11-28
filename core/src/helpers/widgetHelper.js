const { WidgetApi } = require('../service/apiActions/widgetApi');
const { GetData } = require('./getData');
const { DashboardHelper } = require('./dashboardHelper');

class WidgetHelper {
  /*eslint-disable*/
  static async checkThatWidgetNameExistsInData(data, entityName) {
    for (const elem of data) {
      if (elem.widgetName === entityName) return true;
    }
    return false;
  }

  static async checkThatWidgetIsAppearedOnDashboard(widgetName, dashboardId) {
    const dashboardData = await DashboardHelper.getWidgetDataFromDashboard(dashboardId);
    return WidgetHelper.checkThatWidgetNameExistsInData(dashboardData, widgetName);
  }

  static async checkThatWidgetEntityIsCreated(widgetName) {
    const widgetData = await WidgetApi.getWidgetData();
    return GetData.checkThatNameExistsInData(widgetData, widgetName);
  }

  static async getWidgetIdByName(widgetName) {
    const widgetData = await WidgetApi.getWidgetData();
    return GetData.getIdFromData(widgetData, widgetName);
  }
}

module.exports = { WidgetHelper };
