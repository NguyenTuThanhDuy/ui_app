describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="header-button-search"]').should("exist");
  });
});
