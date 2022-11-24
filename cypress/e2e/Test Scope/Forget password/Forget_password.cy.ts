///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { ForgetPassword, validateFormforgetpassword } from "../../Page_model/Forget password/Forget_password_page"

const forgetPassword = new ForgetPassword()
const validateform = new validateFormforgetpassword()


describe('Forget Password Page', () => {

    context('Check All Element Forget Password Page', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            forgetPassword.url(Cypress.env('forget_password').base_url)
        })

        //ACT
        it('Email input box', () => {
            validateform.validateEmail_box()
        })

        //ACT
        it('Foget Password Button', () => {
            validateform.validateForgetpassword_button()
        })

        //ACT
        it('Login Page Button', () => {
            validateform.validateLoginpage_button()
        })

        afterEach(() => {
            cy.wait(100)
        })
    })


    context('All Forget Password Test', () => {
        //Arrange
        beforeEach(() => {
            cy.viewport(1920, 1080)
            forgetPassword.url(Cypress.env('forget_password').base_url)
        })

        //ACT
        it('Null Email', () => {
            //click Forget password
            forgetPassword.clickForgetpassword()

            //Assert
            forgetPassword.validateEmail_null('Please input your email!')
        })

        //ACT
        it('Wrong Format Email', () => {
            //enter email
            forgetPassword.enterEmail('champ_psu.com');

            //click Forget password
            forgetPassword.clickForgetpassword()

            //Assert
            forgetPassword.validateEmail_null('Please enter valid email')
        })

        //ACT
        it('Email Casesensitive', () => {
            //Enter Email
            forgetPassword.enterEmail('CHAMP_psu@outlook.co.th')

            //click Forget password
            forgetPassword.clickForgetpassword()

            //Assert
            forgetPassword.validateForgetpassword_success('Please check your email.')
        })

        //ACT
        it('Forget Password Success', () => {
            ///Enter Email
            forgetPassword.enterEmail('CHAMP_psu@outlook.co.th')

            //click Forget password
            forgetPassword.clickForgetpassword()

            //Assert
            forgetPassword.validateForgetpassword_success('Please check your email.')
        })

        //ACT
        it('Foget Password Button', () => {
            ///Enter Email
            forgetPassword.enterEmail('CHAMP_psu@outlook.co.th')

            //click Forget password
            forgetPassword.clickForgetpassword()

            //Assert
            forgetPassword.validateForgetpassword_success('Please check your email.')
        })

        //ACT
        it('Login Page Button', () => {
            //click login page
            forgetPassword.clickLoginpage()

            //Assert
            forgetPassword.validateLoginpage_button('Welcome to Accounting')
        })

        afterEach(() => {
            cy.wait(200)
        })
    })
})
