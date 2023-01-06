describe("render the dashboard", () => {
    
  it("page rendered", () => {
    cy.visit("/");
    cy.get("[data-cy=display]").should("have.text", "NBA TEAMS");
    cy.get("[data-cy=search]").should("exist");
    cy.get("[data-cy=pagination]").should("exist");
    cy.get("[data-cy=table]").should("exist");
  });

  it("search", () => {
    cy.visit("/");
    cy.get('[data-cy="search"]').type("cle");
    cy.get("tbody > tr > :nth-child(1)").should("exist");
  });

  it("sort by name", () => {
    cy.visit("/");
    cy.get('[name="name"] > div').click();
    cy.get('[data-cy="item-0"] > :nth-child(1)').should("have.text", "76ers");
    cy.get('[name="name"] > div').click();
    cy.get('[data-cy="item-0"] > :nth-child(1)').should("have.text", "Wizards");
  });

  it("open team details", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get("#item-1", { timeout: 100000 }).click();
    cy.get("[data-cy=side]").should("exist");
    cy.get("[data-cy=side-close]").click();
    cy.get("[data-cy=side]").should("not.exist");
  });
});
