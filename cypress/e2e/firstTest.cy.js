/// <reference types='cypress'/>

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    // by tag name
    cy.get("input");

    //by id

    cy.get("#inputEmail1");
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]');
    cy.contains("Sign in");
    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox");

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it.only("then and wrap methods", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[for="inputEmail1"]')
      .should("contain", "Email");
  });
});

it.only("invoke command", () => {
  cy.visit("/");
  cy.contains("Forms").click();
  cy.contains("Form Layouts").click();

  //1
  cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

  //2 Jquery SYntax with invoke

  cy.get('[for="exampleInputEmail1"]')
    .invoke("text")
    .then((text) => {
      expect(text).to.equal("Email address");
    });

  //3. without Invoke
  cy.get('[for="exampleInputEmail1"]').then((label) => {
    expect(label.text()).to.equal("Email address");
  });

  // checkbox
  cy.contains("nb-card", "Basic form")
    .find("nb-checkbox")
    .click()
    .find(".custom-checkbox")
    .invoke("attr", "class")
    .should("contain", "checked");
});
