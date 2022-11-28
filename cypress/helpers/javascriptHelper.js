class JavascriptHelper {
  /*eslint-disable*/
  static click(element) {
    cy.get(element).then(($el) => {
      $el.get(0).click();
    });
  }

  static getCoordinates(className, widgetNumber = 1) {
    const coordinates = [];
    return cy.window().then((win) => {
      coordinates.push(win.document.getElementsByClassName(className)[widgetNumber].getBoundingClientRect().top);
      coordinates.push(win.document.getElementsByClassName(className)[widgetNumber].getBoundingClientRect().bottom);
      return coordinates;
    });
  }

  static scroll(className, widgetNumber = 1) {
    return cy.window().then((win) => {
      win.document.getElementsByClassName(className)[widgetNumber].scrollIntoView();
    });
  }
}

module.exports = { JavascriptHelper };
