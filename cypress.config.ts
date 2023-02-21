import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  e2e: {
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
