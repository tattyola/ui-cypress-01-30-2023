const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.selenium.dev/selenium/web/web-form.html',
    chromeWebSecurity: false,
    video: false,
  },
});
