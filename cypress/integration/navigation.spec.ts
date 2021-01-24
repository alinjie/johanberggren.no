describe("Navigation tests", () => {
  it("renders all routes (Desktop)", () => {
    cy.visit("http://localhost:3000")

    cy.get('[data-testid="desktop-nav-link-Kontakt"]').click()
    cy.url().should("eq", "http://localhost:3000/kontakt")

    cy.get('[data-testid="desktop-nav-link-Konserter"]').click()
    cy.url().should("eq", "http://localhost:3000/konserter")

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
    cy.get('[data-testid="mobile-nav-link-Konserter"]').click()
    cy.url().should("eq", "http://localhost:3000/konserter")

    cy.get('[data-testid="hamburger-menu"]').click()
    cy.get('[data-testid="mobile-nav-link-Hjem"]').click()
    cy.url().should("eq", "http://localhost:3000/")
  })
})
