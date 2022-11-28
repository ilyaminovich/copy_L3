const { BasePage } = require('./basePage');
const { GetData } = require('../../core/src/helpers/getData');

class LaunchPage extends BasePage {
  static totalValues = '//div[contains(@class, "aunchSuiteGrid__total-col")]';

  static passedValues = '//div[contains(@class, "aunchSuiteGrid__passed-col")]';

  static failedValues = '//div[contains(@class, "aunchSuiteGrid__failed-col")]';

  static skippedValues = '//div[contains(@class, "aunchSuiteGrid__skipped-col")]';

  static productBugValues = '//div[contains(@class,"launchSuiteGrid__pb-col")]';

  static automationBugValues = '//div[contains(@class,"launchSuiteGrid__ab-col")]';

  static systemIssueValues = '//div[contains(@class,"launchSuiteGrid__si-col")]';

  static toInvestigateValues = '//div[contains(@class,"launchSuiteGrid__ti-col")]';

  static specifiedStatistics = '//div[contains(@class,"donutChart__total")]';

  static async checkDataForCurrentTestRun() {
    const testRunTemplate = {
      total: undefined,
      passed: undefined,
      failed: undefined,
      skipped: undefined,
      product_bug: undefined,
      automation_bug: undefined,
      system_issue: undefined,
      to_investigate: undefined,
    };

    const testRunStatistics = [];

    const arrWithTotalValues = await GetData.getTextFromMultipleElements(this.totalValues);
    const arrWithPassedValues = await GetData.getTextFromMultipleElements(this.passedValues);
    const arrWithFailedValues = await GetData.getTextFromMultipleElements(this.failedValues);
    const arrWithSkippedValues = await GetData.getTextFromMultipleElements(this.skippedValues);
    const arrWithProductBugValues = await GetData.getTextFromMultipleElements(this.productBugValues);
    const arrWithAutomationBugValues = await GetData.getTextFromMultipleElements(this.automationBugValues);
    const arrWithSystemIssueValues = await GetData.getTextFromMultipleElements(this.systemIssueValues);
    const arrWithToInvestigateValues = await GetData.getTextFromMultipleElements(this.toInvestigateValues);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arrWithTotalValues.length; i++) {
      const newObj = Object.create(testRunTemplate);
      newObj.total = arrWithTotalValues[i];
      newObj.passed = arrWithPassedValues[i];
      newObj.failed = arrWithFailedValues[i];
      newObj.skipped = arrWithSkippedValues[i];
      newObj.product_bug = arrWithProductBugValues[i];
      newObj.automation_bug = arrWithAutomationBugValues[i];
      newObj.system_issue = arrWithSystemIssueValues[i];
      newObj.to_investigate = arrWithToInvestigateValues[i];
      testRunStatistics.push(newObj);
    }

    return testRunStatistics;
  }
}

module.exports = { LaunchPage };
