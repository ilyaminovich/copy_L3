const { Then, When } = require('@wdio/cucumber-framework');
const { BrowserNavigation } = require('../../core/src/helpers/browserNavigation');
const { LogInPage } = require('../pageObjects/loginPage');
const { DashboardPage } = require('../pageObjects/dashboardPage');
const { FiltersPage } = require('../pageObjects/filtersPage');
const { initEnv } = require('../../core/configs/envs.conf');
const { logger } = require('../../core/src/utils/logger');
const { BasePage } = require('../pageObjects/basePage');
const { LaunchPage } = require('../pageObjects/launchPage');
const { TestRunStorage } = require('../../core/src/dataStorage/testRunStorage');
const { DashboardApi } = require('../../core/src/service/apiActions/dashboardApi');
const { WidgetApi } = require('../../core/src/service/apiActions/widgetApi');
const { WidgetHelper } = require('../../core/src/helpers/widgetHelper');
const { DashboardHelper } = require('../../core/src/helpers/dashboardHelper');

When('Open Report Portal', async () => {
  logger.info('Open Report Portal');
  await BrowserNavigation.url(initEnv.rp_ui.baseUrl);
});

When(/^Log In to RP as Admin$/, async () => {
  logger.info('Log In to RP as Admin');
  await LogInPage.logIn(initEnv.rp_ui.user, initEnv.rp_ui.password);
});

When(/^Log Out$/, async () => {
  logger.info('Log Out');
  await LogInPage.logOut();
});

Then(/^Check that dashboards section is present$/, async () => {
  logger.info('Check that dashboards section is present');
  await DashboardPage.checkDashboardsSectionIsPresent();
});

Then(/^Check that filters section is present$/, async () => {
  logger.info('Check that filters section is present');
  await FiltersPage.checkFiltersSectionIsPresent();
});

Then(/^Check that feature icons are present$/, async (table) => {
  logger.info('Check that feature icons are present');
  // eslint-disable-next-line no-restricted-syntax
  for (const row of table.rows()) {
    BasePage.checkFeatureIconIsPresent(row[0]);
  }
});

Then(/^Verify that test run contains expected data( .*)$/, async (param) => {
  logger.info('Verify that test run contains expected data');
  const paramValues = JSON.parse(param);
  await browser.url(`http://localhost:8080/ui/#hometask_project/launches/all/${paramValues.testNumber}`);
  const currentTestRunData = await LaunchPage.checkDataForCurrentTestRun();
  const dataFromStorage = TestRunStorage.demoApiTests1;
  await expect(dataFromStorage).toEqual(currentTestRunData);
});

Then(/^Check that name of existed Projects are$/, async (text) => {
  logger.info('Check that name of existed Projects are');
  const expectedText = await BasePage.getDataFromProjectSelector();
  await expect(expectedText.toLowerCase()).toContain(text);
});

Then(/^Create dashboard via API( .*)$/, async (param) => {
  logger.info('Create dashboard via API');
  await DashboardApi.createDashboard(param);
});

Then(/^Create widget via API with "([^"]*)" name$/, async (widgetName) => {
  logger.info(`Create widget via API with ${widgetName} name`);
  await WidgetApi.createWigdet(widgetName);
});

Then(/^Remove "([^"]*)" dashboard via API$/, async (dashboardName) => {
  logger.info('Remove dashboard via API');
  const dashboardId = await DashboardHelper.getDashboardIdByName(dashboardName);
  await DashboardApi.removeDashboard(dashboardId);
});

Then(/^Update "([^"]*)" dashboard via API( .*)$/, async (dashboardName, param) => {
  logger.info('Update dashboard via API');
  const dashboardId = await DashboardHelper.getDashboardIdByName(dashboardName);
  await DashboardApi.updateDashboard(dashboardId, param);
});

Then(/^Check that "([^"]*)" dashboard is (created|not created)$/, async (dashboardName, isCreated) => {
  logger.info(`Check that ${dashboardName} dashboard is ${isCreated}`);
  const existingDashboardName = await DashboardHelper.checkThatDashboardEntityIsCreated(dashboardName);
  expect(existingDashboardName).toEqual(isCreated === 'created');
});

Then(/^Check that "([^"]*)" widget is (created|not created)$/, async (widgetName, isCreated) => {
  logger.info(`Check that ${widgetName} widget is ${isCreated}`);
  const existingDasboardName = await WidgetHelper.checkThatWidgetEntityIsCreated(widgetName);
  expect(existingDasboardName).toEqual(isCreated === 'created');
});

Then(/^Update "([^"]*)" widget with "([^"]*)" name via API$/, async (widgetNameBefore, widgetNameAfter) => {
  logger.info(`Update ${widgetNameBefore} widget with ${widgetNameAfter} via API`);
  const widgetId = await WidgetHelper.getWidgetIdByName(widgetNameBefore);
  await WidgetApi.updateWigdet(widgetId, widgetNameAfter);
});

Then(/^(Add|Delete) "([^"]*)" widget on "([^"]*)" dashboard$/, async (method, widgetName, dashboardName) => {
  logger.info(`${method} ${widgetName} widget on ${dashboardName} dashboard`);
  const dashboardId = await DashboardHelper.getDashboardIdByName(dashboardName);
  const widgetId = await WidgetHelper.getWidgetIdByName(widgetName);
  if (method === 'Add') {
    await DashboardApi.addWidgetOnDashboard(dashboardId, widgetId);
  } else {
    await DashboardApi.removeWidgetOnDashboard(dashboardId, widgetId);
  }
});

Then(/^Check that "([^"]*)" widget is (appeared|not appeared) on "([^"]*)" dashboard$/, async (widgetName, isAppeared, dashboardName) => {
  logger.info(`Check that ${widgetName} widget is ${isAppeared} on ${dashboardName} dashboard`);
  const dashboardId = await DashboardHelper.getDashboardIdByName(dashboardName);
  const existingWidgetName = await WidgetHelper.checkThatWidgetIsAppearedOnDashboard(widgetName, dashboardId);
  expect(existingWidgetName).toEqual(isAppeared === 'appeared');
});
