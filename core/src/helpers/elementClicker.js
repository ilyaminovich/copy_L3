const { GetData } = require('./getData');
const { ErrorWrapper } = require('../utils/ErrorWrapper');

class ElementClicker {
  static async click(selector, visible = true) {
    try {
      const element = await GetData.getElement(selector, visible);
      await element.click();
    } catch (error) {
      throw ErrorWrapper.elementError(error, selector);
    }
  }
}

module.exports = { ElementClicker };
