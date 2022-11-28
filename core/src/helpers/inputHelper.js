const { GetData } = require('./getData');
const { ErrorWrapper } = require('../utils/ErrorWrapper');

class InputHelper {
  static async setValueToElement(elementLocator, value) {
    try {
      const element = await GetData.getElement(elementLocator);
      await element.setValue(value);
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
}
module.exports = { InputHelper };
