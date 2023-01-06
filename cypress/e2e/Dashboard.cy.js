describe("render the dashboard", () => {
  // render home
  it("page rendered", () => {
    cy.visit("/");
    cy.get("[data-cy=display]").should("have.text", "NBA TEAMS");
    cy.get("[data-cy=search]").should("exist");
    cy.get("[data-cy=pagination]").should("exist");
    cy.get("[data-cy=table]").should("exist");
  });

  //Search
  it("search", () => {
    cy.visit("/");
    cy.get('[data-cy="search"]').type("cle");
    cy.get("tbody > tr > :nth-child(1)").should("exist");
    
    cy.get('[data-cy="search"]').clear();
    cy.get('[data-cy="search"]').type("xyz");
    cy.get("tbody > tr").should("not.exist");
  });
  //sorting
  it("sort by name", () => {
    cy.visit("/");
    cy.get('[name="name"] > div').click();
    cy.get('[data-cy="item-0"] > :nth-child(1)').should("have.text", "76ers");
    cy.get('[name="name"] > div').click();
    cy.get('[data-cy="item-0"] > :nth-child(1)').should("have.text", "Wizards");
  });
  
  //side details
  it("open team details", () => {
      cy.visit("/");
      cy.wait(2000);
      cy.get("#item-0", { timeout: 100000 }).click();
      cy.get("[data-cy=side]").should("exist");
      cy.get("[data-cy=side-close]").click();
      cy.get("[data-cy=side]").should("not.exist");
    });
    //pagination
    it("next page", () => {
      cy.visit("/");
      cy.get('[data-cy=next-p]').click();
      cy.get('[data-cy=item-0] > :nth-child(1)').should("have.text", "Mavericks");
      cy.wait(1000)
      cy.get('[data-cy=prev-p]').click();
      cy.get('[data-cy=item-0] > :nth-child(1)').should("not.have.text", "Mavericks");
    });
});
