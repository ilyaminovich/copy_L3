const { Waiters } = require('../../core/src/helpers/waiters');
const { BasePage } = require('./basePage');

class FiltersPage extends BasePage {
  static filtersTitle = 'span[title="Filters"]';

  static async checkFiltersSectionIsPresent() {
    await Waiters.waitElementIsDisplayed(this.filtersTitle);
  }
}

module.exports = { FiltersPage };
