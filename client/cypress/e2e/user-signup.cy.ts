import { Register } from "./signup/registration"
const email = Cypress.env('userEmail')
const password = Cypress.env('userPassword')
const invalidEmail = Cypress.env('invalidEmail')
const invalidPassword = Cypress.env('invalidPassword')
const registerNewUser = new Register
describe('Registration page', () => {
  beforeEach(() => {
    registerNewUser.registrationPage()
  })
  it('Should have registration form', () => {
    registerNewUser.registrationForm()
  })
  it('Should have registration form title', () => {
    registerNewUser.registrationFormToolbarTitle('Register')
  })
  it('Should have registration page title', () => {
    registerNewUser.registrationPageToolbarTitle('TabTracker')
  })

  it('Should have registration page title', () => {
    registerNewUser.registrationPageToolBarItems('Browse')
  })
  it('Should have login anchor tag in register page', () => {
    registerNewUser.registrationPageLoginAnchorTag()
  })

  it('Should have songs anchor tag in register page', () => {
    registerNewUser.registrationPageSongsAnchorTag()
  })
 it('Should have email input', () => {
  registerNewUser.regEmial()
 })
 it('Should have password input', () => {
  registerNewUser.regPassword()
 })
it('Should have register button', () => {
  registerNewUser.regPageButton()
})
}) 

describe('Sign up', () => {
  beforeEach(() => {
    registerNewUser.registrationPage()
  })  
 
  it('Should have danger alert for invalid email', () => {
    registerNewUser.emailDangerAlert(invalidEmail, password)
  }) 

  it('Should have danger alert for incorrect passowrd parten', () => {
    registerNewUser.passwordDangerAlert(email, invalidPassword)
  }) 

 it('Should register new user', () => {
  registerNewUser.newUserSignUp(email, password)
 })
 })


