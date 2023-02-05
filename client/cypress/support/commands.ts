/// <reference types="cypress" />


import { GlobalSelectors, Login, Registration } from "../e2e/selectors/tabTracker-selectors"
declare global {
    namespace Cypress {
        interface Chainable<Subject = any> {
            loginToTabTracker(email: string, password: any): Chainable<any>;
            email(): Chainable<any>;
            password(): Chainable<any>;
           
        }
    }
}

Cypress.Commands.add('loginToTabTracker', (email, password) => {

    cy.get(Login.loginEmail)
        .type(email)
    cy.get(Login.loginPassword)
        .type(password)
    cy.get(Login.loginButton).click()
})
Cypress.Commands.add('email', () => {
    cy.get(GlobalSelectors.placeHolderText)
        .eq(0)
        .should('exist')
        .and('be.visible')
    return this
})
Cypress.Commands.add('password', () => {
    cy.get(GlobalSelectors.placeHolderText)
        .eq(1)
        .should('exist')
        .and('be.visible')
    return this
})

export default {} 