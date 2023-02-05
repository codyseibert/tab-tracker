import { loginPage } from "./signIn/login"

const email = Cypress.env('existingUser')
const password = Cypress.env('existingUserPassword')
const invalidEmail = Cypress.env('invalidEmail')
const invalidPassword = Cypress.env('invalidPassword')

const loginPageT = new loginPage()
// verify login page
describe('Login page', () => {
    beforeEach(() => {
        loginPageT.navigateToLoginPage()
    })
    it('Should have login form', () => {
        loginPageT.loginForm()
    })
    it('Should have login form title', () => {
        loginPageT.loginFormToolbarTitle('Login')
      })
      it('Should have login page title', () => {
        loginPageT.loginPageToolbarTitle('TabTracker')
      })
    
      it('Should have login page title', () => {
        loginPageT.loginPageToolBarItems('Browse')
      })
      it('Should have register anchor tag in login page', () => {
        loginPageT.signUpAnchorTag()
      })
    
      it('Should have songs anchor tag in login page', () => {
        loginPageT.loginPageSongsAnchorTag()
      })
     it('Should have email input', () => {
        loginPageT.loginEmail()
     })
     it('Should have email place placeholder', () => {
        loginPageT.emailPlaceHolder('Email')
     })
     it('Should have email place placeholder', () => {
        loginPageT.passwordPlaceHolder('Password')
     })
     it('Should have password input', () => {
        loginPageT.loginPassword()
     })
    it('Should have login button', () => {
        loginPageT.loginButton()
    })
})

//verify login page validation and login
describe('Sign up', () => {
    beforeEach(() => {
        loginPageT.loginPage()
    })
    
    it('Should have danger alert for invalid user', () => {
        loginPageT.emailDangerAlert(invalidEmail, password)
    }) 
  
    it('Should have danger alert for incorrect password pattern', () => {
        loginPageT.passwordDangerAlert(email, invalidPassword)
    }) 
  
   it('Should login with existing user', () => {
    // custom command for login
  cy.loginToTabTracker(email, password)
   })
   })