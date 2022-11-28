const { Waiters } = require('./waiters');
const { ErrorWrapper } = require('../utils/ErrorWrapper');

class GetData {
  static async getElement(elementLocator, visible = true) {
    try {
      const element = await $(elementLocator);
      await Waiters.waitElementIsExist(elementLocator);
      await element.scrollIntoView({ block: 'center' });
      if (visible) {
        await Waiters.waitElementIsDisplayed(elementLocator);
      }
      return element;
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }

  static async getTextFromElement(elementLocator) {
    try {
      const element = await this.getElement(elementLocator);
      return element.getText();
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }

  static async getTextFromMultipleElements(elementLocator) {
    try {
      await Waiters.waitUntilElementWillDisplay(elementLocator);
      return await $$(elementLocator).map(async (element) => element.getText());
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }

  /*eslint-disable*/
  static async checkThatNameExistsInData(data, entityName) {
    for (const elem of data) {
      if (elem.name === entityName) return true;
    }
    return false;
  }

  static async getIdFromData(data, entityName) {
    for (const elem of data) {
      if (elem.name === entityName) return elem.id;
    }
  }
}
module.exports = { GetData };
