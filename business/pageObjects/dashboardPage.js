const { Waiters } = require('../../core/src/helpers/waiters');
const { BasePage } = require('./basePage');

class DashboardPage extends BasePage {
  static dashboardsTitle = 'span[title="All Dashboards"]';

  static async checkDashboardsSectionIsPresent() {
    await Waiters.waitElementIsDisplayed(this.dashboardsTitle);
  }
}

module.exports = { DashboardPage };
