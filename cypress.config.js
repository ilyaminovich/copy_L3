const { defineConfig } = require('cypress');
/*eslint-disable*/

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-failed-log/on')(on);
    },
    defaultCommandTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1280,
    experimentalStudio: true,
    screenshotOnRunFailure: true,
  },
});
