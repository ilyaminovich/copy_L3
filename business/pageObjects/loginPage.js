const { InputHelper } = require('../../core/src/helpers/inputHelper');
const { ElementClicker } = require('../../core/src/helpers/elementClicker');
const { Waiters } = require('../../core/src/helpers/waiters');
const { BasePage } = require('./basePage');

class LogInPage extends BasePage {
  static userName = '[name="login"]';

  static passwordField = '[name="password"]';

  static logInButton = 'button[type="submit"]';

  static avatarIcon = 'div img[alt="avatar"]';

  static logOutButton = 'div[class*="userBlock__menu-item"]';

  static logInPage = 'div[class*="loginPage"]';

  static messageContainer = 'div[class*="notificationItem__message-container"]';

  static async logIn(userEmail, userPassword) {
    await InputHelper.setValueToElement(this.userName, userEmail);
    await InputHelper.setValueToElement(this.passwordField, userPassword);
    await ElementClicker.click(this.logInButton);
  }

  static async logOut() {
    await Waiters.waitElementIsNotDisplayed(this.messageContainer);
    await Waiters.waitElementIsDisplayed(this.avatarIcon);
    await ElementClicker.click(this.avatarIcon);
    await Waiters.waitElementIsDisplayed(this.logOutButton);
    await ElementClicker.click(this.logOutButton);
    await Waiters.waitElementIsDisplayed(this.logInPage);
  }
}

module.exports = { LogInPage };
