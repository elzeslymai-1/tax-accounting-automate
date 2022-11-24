///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { ResetPassword, validateFormresetpassword } from "../../Page_model/Reset password/Reset_password_page"

const resetPassword = new ResetPassword()
const validateform = new validateFormresetpassword()


describe('Reset Password Page', () => {
    let base_url = Cypress.env('reset_password').valid_url
    let expire_url = Cypress.env('reset_password').expire_url
    context('Check All Element Reset Password Page', () => {
        //Arrange
        before(() => {
            cy.viewport(1920, 1080)
            resetPassword.url(base_url)
        })

        //ACT
        it('New Password input box', () => {
            validateform.validateNewpassword_box()
        })

        //ACT
        it('Confirm Password input box', () => {
            validateform.validateConfirmpassword_Box()
        })

        //ACT
        it('Show New Password Button', () => {
            validateform.validateShownewpassword_button()
        })

        //ACT
        it('Show Confirm Password Button', () => {
            validateform.validateShowconfirmpassword_button()
        })

        //ACT
        it('Reset Button', () => {
            validateform.validateResetpassword_button()
        })

        //ACT
        it('Login Page Button', () => {
            validateform.validateLoginpage_button()
        })
    })


    context('All Reset Password Test', () => {
        //Arrange
        beforeEach(() => {
            cy.viewport(1920, 1080)
            resetPassword.url(base_url)
        })

        //ACT
        it('Null New Password', () => {

            //click reset password
            resetPassword.clickResetpassword()

            //Assert
            resetPassword.validateNewpassword_null('Please input your new password!')
        })

        //ACT
        it('New Password Less Than 8', () => {
            //enter new password
            resetPassword.enterNewpassword('1111')

            //click reset password
            resetPassword.clickResetpassword()

            //Assert
            resetPassword.validateNewpassword_less8("'password' must be at least 8 characters")
        })

        //ACT
        it('Null Confirm Password', () => {

            //click reset password
            resetPassword.clickResetpassword()

            //Assert
            resetPassword.validateConfirmpassword_null('Please input your confirm password!')
        })

        //ACT
        it('Password Not Match', () => {
            //enter new password
            resetPassword.enterNewpassword('11111111')

            //enter confirm password
            resetPassword.enterConfirmpassword('22222222')

            //click reset password
            resetPassword.clickResetpassword()

            //Assert
            resetPassword.validatePassword_notmatch('Passwords that you entered does not match')
        })

        //ACT
        it('Show New Password', () => {
            //enter new password
            resetPassword.enterNewpassword('11111111')

            //click Show new password
            resetPassword.clickShownewpassword()

            //Assert
            resetPassword.validateShownewpassword_button()
        })

        //ACT
        it('Show Confirm Password', () => {
            //enter confirm password
            resetPassword.enterConfirmpassword('11111111')

            //click show confirm password
            resetPassword.clickShowconfirmpassword()

            //Assert
            resetPassword.validateShowconfirmpassword_button()
        })

        //ACT
        it('Loginpage Button', () => {
            //click loginpage
            resetPassword.clickLoginpage()

            //Assert
            resetPassword.validateLoginpage_button('Welcome to Accounting')
        })

        //ACT
        it('Reset Password Success', () => {
            //enter new password
            resetPassword.enterNewpassword('11111111')

            //enter confirm password
            resetPassword.enterConfirmpassword('11111111')

            //click reset password
            resetPassword.clickResetpassword()

            //Assert
            resetPassword.validateResetpassword_success('Your password has been changed successfully.')
        })

        //ACT
        it('Expire URL', () => {
            cy.visit(expire_url)

            resetPassword.validateExpireURL('Your request to reset password has already expired.')
        })
    })
})
