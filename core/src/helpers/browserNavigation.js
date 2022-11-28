class BrowserNavigation {
  static async acceptAlert() {
    await browser.acceptAlert();
  }

  static async closeWindow() {
    await browser.closeWindow();
  }

  static async refresh() {
    await browser.refresh();
  }

  static async url(path) {
    await browser.url(path);
  }

  static getBrowser() {
    return browser;
  }

  static async getUrl() {
    const url = await browser.getUrl();
    return url;
  }

  static async switchWindow(title) {
    await browser.switchWindow(title);
  }
}

module.exports = { BrowserNavigation };
