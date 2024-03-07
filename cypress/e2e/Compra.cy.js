describe('Teste funcional de login', () => {
  it('Deve realizar o login', () => {
    cy.visit("https://www.saucedemo.com/v1/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[value="LOGIN"]').click()

    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get('.fa-layers-counter').click()
    cy.get('.btn_action').click()

    cy.get('[data-test="firstName"]').type("Standard")
    cy.get('[data-test="lastName"]').type("User")
    cy.get('[data-test="postalCode"]').type("99988777")
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
    
  })
});