///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { LoginPage, validateFormlogin } from "../../Page_model/Login page/Login_page"

const loginPage = new LoginPage()
const formlogin = new validateFormlogin();

describe('Login Page', () => {


    context('Check All Element Login page', () => {
        //Arrange
        before(() => {
            cy.viewport(1920,1080)
            loginPage.url(Cypress.env('base_url'))
        })

        //ACT
        it('Email input box', () => {
            //Check email input box
            formlogin.validateEmail_box()
        })

        //ACT
        it('Password input box', () => {
            //Check password input box
            formlogin.validatePassword_box()
        })
        
        //ACT
        it('Show password button', () => {
            //Check show password button
            formlogin.validateShowpassword_box()
        })

        //ACT
        it('Rememberme button', () => {
            //Check rememberme button
            formlogin.validateRememberme_button()
        })

        //ACT
        it('Forgetpassword button', () => {
            //Check forgetpassword button
            formlogin.validateForgetpassword_button()
        })

        //ACT
        it('Login button', () => {
            //Check login button
            formlogin.validateLogin_button()
        })
    })


    context('All Login Test', () => {
        //Arrange
        beforeEach(() => {
            cy.viewport(1920,1080)
            loginPage.url(Cypress.env('base_url'))
        })

        //ACT
        it('Login Null Password', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.clickLogin()

            //Check password
            loginPage.validatePassword_null('Please input your password!')
        })

        //ACT
        it('Login Null Username', () => {
            //Enter Login
            loginPage.enterPassword('1111111')
            loginPage.clickLogin()

            //Check username
            loginPage.validateUsername_null('Please input your username!')
        })

        //ACT
        it.skip('Wrong Username Format', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@')
            loginPage.enterPassword('1111111')
            loginPage.clickLogin()

            //check wrong username format
            loginPage.validateUsername_WrongFormat('Sorry, unrecognized username or password.')
        })

        //ACT
        it('Username Case Sensitive', () => {
            //Enter Login
            loginPage.enterUsername('CHAMP_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()

            //check username case sensitive
            loginPage.validateUsername_Casesensitive('Please select project')
        })

        //ACT
        it('Login Failed', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('1111111')
            loginPage.clickLogin()

            //check wrong username or password
            loginPage.validateLogin_failed('Sorry, unrecognized username or password.')

        })

        //ACT
        it('Button Show Password', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')

            //click show password
            loginPage.clickShowpassword()

            //check button show password
            loginPage.validateButton_showpassword()
        })

        //ACT
        it('Button Rememberme', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')

            //click rememberme
            loginPage.clickRememberme()

            //check button rememberme
            loginPage.validateButton_rememberme()
        })

        //ACT
        it('Button Forgetpassword', () => {
            //click forgetpassword
            loginPage.clickForgetpassword()

            //check button forgetpassword
            loginPage.validateButton_forgetpassword('Forgot your password')
        })

        //ACT
        it('Login Success', () => {
            //Enter Login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()

            //check login success
            loginPage.validateLogin_success('Please select project')

        })
    })
})
