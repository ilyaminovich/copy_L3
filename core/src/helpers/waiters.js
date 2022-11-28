const { ErrorWrapper } = require('../utils/ErrorWrapper');
const { config } = require('../../configs/wdio.conf');

class Waiters {
  static async waitElementIsExist(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForExist({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitElementIsDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitElementIsNotDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout, reverse: true });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitUntilElementWillDisplay(elementLocator) {
    const element = await $(elementLocator);
    await browser.waitUntil(async () => element.isDisplayed(), {
      timeout: config.timeouts.default,
      timeoutMsg: `Element with selector: ${element.selector} still not displayed`,
    });
  }
}
module.exports = { Waiters };
