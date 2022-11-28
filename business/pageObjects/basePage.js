const { Waiters } = require('../../core/src/helpers/waiters');
const { ElementClicker } = require('../../core/src/helpers/elementClicker');
const { GetData } = require('../../core/src/helpers/getData');

class BasePage {
  static projectSelector = '//div[contains(@class, "projectSelector__project-selector")]';

  static projectList = '//div[contains(@class, "projectSelector__projects-list")]//div[contains(@class, "scrollWrapper__scrolling-content")]';

  static async checkFeatureIconIsPresent(icon) {
    const featureTemplate = `a[href='#hometask_project/${icon}']`;
    await Waiters.waitElementIsDisplayed(featureTemplate);
  }

  static async getDataFromProjectSelector() {
    await ElementClicker.click(this.projectSelector);
    return GetData.getTextFromElement(this.projectList);
  }
}

module.exports = { BasePage };
