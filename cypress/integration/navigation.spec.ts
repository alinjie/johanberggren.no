describe("Navigation tests", () => {
  it("renders all routes (Desktop)", () => {
    cy.visit("http://localhost:3000")

    cy.get('[data-testid="desktop-nav-link-Kontakt"]').click()
    cy.url().should("eq", "http://localhost:3000/kontakt")

    cy.get('[data-testid="desktop-nav-link-Om"]').click()
    cy.url().should("eq", "http://localhost:3000/om")

    cy.get('[data-testid="desktop-nav-link-Hjem"]').click()
    cy.url().should("eq", "http://localhost:3000/")
  })

  it("renders all routes (Mobile)", () => {
    cy.viewport("iphone-x")
    cy.visit("http://localhost:3000")

    cy.get('[data-testid="hamburger-menu"]').click()
    cy.get('[data-testid="mobile-nav-link-Kontakt"]').click()
    cy.url().should("eq", "http://localhost:3000/kontakt")

    cy.get('[data-testid="hamburger-menu"]').click()
    cy.get('[data-testid="mobile-nav-link-Om"]').click()
    cy.url().should("eq", "http://localhost:3000/om")

    cy.get('[data-testid="hamburger-menu"]').click()
    cy.get('[data-testid="mobile-nav-link-Hjem"]').click()
    cy.url().should("eq", "http://localhost:3000/")
  })
})
