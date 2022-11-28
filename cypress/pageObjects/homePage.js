const { JavascriptHelper } = require('../helpers/javascriptHelper');
const { Url } = require('../fixtures/url');

class HomePage {
  /*eslint-disable*/
  static userName = '[name="login"]';

  static passwordField = '[name="password"]';

  static logInButton = 'button[type="submit"]';

  static async logIn(userEmail, userPassword) {
    cy.visit(`${Url.baseUrl}#login`);
    cy.get(this.userName).should('be.visible').type(userEmail);
    cy.get(this.passwordField).should('be.visible').type(userPassword);
    await JavascriptHelper.click(this.logInButton);
  }
}

module.exports = { HomePage };
