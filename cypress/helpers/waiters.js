class Waiters {
  /*eslint-disable*/
  static waitForInitialValue(element, initialValue) {
    cy.get(element).should('have.value', initialValue);
  }

  static waitForInitialValueChanged(element, initialValue) {
    cy.get(element).should('not.have.value', initialValue);
  }

  static waitForTextContains(element, text) {
    cy.get(element).should('contain', text);
  }

  static waitUntilElementIsNotExist(element) {
    cy.get(element).should('not.exist');
  }

  static waitUntilElementIsExist(element) {
    cy.get(element).should('exist');
  }

  static waitUntilElementIsNotVisible(element) {
    cy.get(element).should('not.be.visible');
  }

  static waitUntilElementIsVisible(element) {
    cy.get(element).should('be.visible');
  }
}

module.exports = { Waiters };
