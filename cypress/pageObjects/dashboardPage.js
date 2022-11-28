const { JavascriptHelper } = require('../helpers/javascriptHelper');
const { Data } = require('../fixtures/data');

class DashboardPage {
  /*eslint-disable*/
  static cypressDashboard = '//a[contains(text(), "cypress") and contains(@class, "dashboardTable")]';

  static projectSelector = '.projectSelector__project-selector--FXbsR';

  static hometaskProject = '[href="#hometask_project"]';

  static first = '.react-grid-layout [class="react-grid-item widgetsGrid__widget-view--dVnmj react-draggable cssTransforms react-resizable"]:first-child';

  static arrow = '.react-grid-layout [class="react-grid-item widgetsGrid__widget-view--dVnmj react-draggable cssTransforms react-resizable"]:first-child .react-resizable-handle';

  static firstWidgetContent = '.react-grid-layout [class="react-grid-item widgetsGrid__widget-view--dVnmj react-draggable cssTransforms react-resizable"]:first-child .launchExecutionAndIssueStatistics__chart-container--1-5e0:first-child .c3-chart-arcs-title';

  static widgetClassName = 'widget__widget-container--3ZTIX';

  static async openDashboard() {
    const specifiedDashboard = cy.xpath(this.cypressDashboard);
    specifiedDashboard.click();
  }

  static async openProject() {
    cy.get(this.projectSelector)
      .first()
      .click();
    cy.get(this.hometaskProject)
      .first()
      .click();
  }

  static async moveWidgetChangeSize() {
    cy.get(this.arrow).trigger('mousedown', { which: 1 })
      .trigger('mousemove', 100, 50, { force: true })
      .trigger('mouseup', { force: true });
  }

  static async moveWidgetReturnSize() {
    cy.get(this.arrow).trigger('mousedown', { which: 1 })
      .trigger('mousemove', -100, -50, { force: true })
      .trigger('mouseup', { force: true });
  }

  static async checkWidgetChangedSize() {
    return cy
      .get(this.first)
      .invoke('prop', 'clientWidth')
      .should('eq', Data.widgetChangedSize);
  }

  static async checkWidgetBaseSize() {
    return cy
      .get(this.first)
      .invoke('prop', 'clientWidth')
      .should('eq', Data.widgetBaseSize);
  }

  static async checkWidgetContentBaseSize() {
    return cy
      .get(this.firstWidgetContent)
      .invoke('prop', 'clientWidth')
      .should('eq', Data.widgetContentBaseSize);
  }

  static async checkWidgetContentChangedSize() {
    return cy
      .get(this.firstWidgetContent)
      .invoke('prop', 'clientWidth')
      .should('eq', Data.widgetContentChangedSize);
  }

  static checkWidgetPosition(number, coordinates) {
    return JavascriptHelper.getCoordinates(this.widgetClassName, number).should('eql', coordinates);
  }
}

module.exports = { DashboardPage };
