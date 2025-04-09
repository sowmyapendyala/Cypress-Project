const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't5krgn',
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    video : true,
    setupNodeEvents(on, config) {
    },
  },
});