const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x6itg9',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      projectId: "x6itg9"
    },
  },
});
