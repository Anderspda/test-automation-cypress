/// <reference types="cypress" />

context('Funcionalidade Login', () => {
    it('Acessar a página de cadastro', () => {
        cy.visit('http://automationexercise.com')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should('contain', 'New User Signup!')
        cy.get('[data-qa="signup-name"]').type('Teste')
        cy.get('[data-qa="signup-email"]').type('teste@example.com')
        cy.get('[data-qa="signup-button"]').click()

        cy.get(':nth-child(1) > b').should('contain', 'Enter Account Information')
    })

})