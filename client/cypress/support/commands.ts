/// <reference types="cypress" />


import { Login } from "../e2e/selectors/tabTracker-selectors"
declare global {
 namespace Cypress {
    interface Chainable<Subject = any> {
        loginToTabTracker(email:string, password:any): Chainable<any>;
    }
  }}

  Cypress.Commands.add('loginToTabTracker', (email, password) => {

    cy.get(Login.loginEmail)
        .type(email)
    cy.get(Login.loginPassword)
        .type(password)
    cy.get(Login.loginButton).click()
})
export default {} 