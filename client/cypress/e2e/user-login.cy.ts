import { loginPage } from "./signIn/login"

const email = Cypress.env('existingUser')
const password = Cypress.env('existingUserPassword')
const invalidEmail = Cypress.env('invalidEmail')
const invalidPassword = Cypress.env('invalidPassword')

const loginpage = new loginPage()
describe('Login page', () => {
    beforeEach(() => {
        loginpage.loginPage()
    })
    it('Should have login form', () => {
        loginpage.loginForm()
    })
    it('Should have login form title', () => {
        loginpage.loginFormToolbarTitle('Login')
      })
      it('Should have login page title', () => {
        loginpage.loginPageToolbarTitle('TabTracker')
      })
    
      it('Should have login page title', () => {
        loginpage.loginPageToolBarItems('Browse')
      })
      it('Should have register anchor tag in login page', () => {
        loginpage.signUpAnchorTag()
      })
    
      it('Should have songs anchor tag in login page', () => {
        loginpage.loginPageSongsAnchorTag()
      })
     it('Should have email input', () => {
      loginpage.loginEmial()
     })
     it('Should have password input', () => {
      loginpage.loginPassword()
     })
    it('Should have login button', () => {
      loginpage.loginButton()
    })
})

describe('Sign up', () => {
    beforeEach(() => {
        loginpage.loginPage()
    })
   
    it('Should have danger alert for invalid user', () => {
      loginpage.emailDangerAlert(invalidEmail, password)
    }) 
  
    it('Should have danger alert for incorrect passowrd parten', () => {
        loginpage.passwordDangerAlert(email, invalidPassword)
    }) 
  
   it('Should login with existing user', () => {
  cy.loginToTabTracker(email, password)
   })
   })