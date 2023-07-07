const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://shor.tcut.de/de",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
