import { navigateTo } from "../support/page_objects/navigationPage";

describe("Test with page Objects", () => {
  beforeEach("open applecatin", () => {
    cy.visit("/");
  });

  it("verify navigation across the pages", () => {
    navigateTo.formLayoutsPage();
    navigateTo.datepickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });
});
