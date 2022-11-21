///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { EditProfile, ValidateEditprofile } from "../../Page_model/Edit profile/Edit_profile_page"
import { LoginPage } from "../../Page_model/Login page/Login_page"

const editProfile = new EditProfile()
const validateEditProfile = new ValidateEditprofile()
const loginPage = new LoginPage()


describe('Edit Profile Page', () => {
    let base_url = 'https://dev.tax-accounting.finstable.co.th/login'

    context('Check All Element For Edit Profile', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            editProfile.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
            //select project from dialog
            editProfile.clickProjectfromdialog()
            //click account menu (top-right)
            editProfile.clickAccountmenu()
            //click manage account menu
            editProfile.clickManageaccount()
            cy.wait(1000)
        })

        //ACT
        it('Firstname Box', () => {
            //Assert
            validateEditProfile.validateFirstname_element()
        })

        //ACT
        it('Lastname Box', () => {
            //Assert
            validateEditProfile.validateLastname_element()
        })

        //ACT
        it('Email Box', () => {
            //Assert
            validateEditProfile.validateEmail_element()
        })

        //ACT
        it('Password Box', () => {
            //Assert
            validateEditProfile.validatePassword_element()
        })

        //ACT
        it('Confirm password Box', () => {
            //Assert
            validateEditProfile.validateConfirmpassword_element()
        })

        //ACT
        it('Submit Button', () => {
            //Assert
            validateEditProfile.validateSubmit_element()
        })

        //after
        afterEach(()=>{
            cy.wait(200)
        })
    })

    context('All Edit Profile Test', () => {
        //Arrange
        beforeEach(()=>{
            //cy.wait(500)
            cy.viewport(1920,1080)  
        })

        //ACT
        it('Check Show Firstname', () => {
            //Assert
            editProfile.validateShowFirstname('Juggrid')
        })

        //ACT
        it('Check Show Lastname', () => {
            //Assert
            editProfile.validateShowLastname('Chetwichian')
        })

        //ACT
        it('Null Firstname', () => {
            //clear firstname
            editProfile.clearFirstname()

            //Assert
            editProfile.validateFirstname_box("'firstname' is required")
        })

        //ACT
        it('Null Lastname', () => {
            //clear lastname
            editProfile.clearLastname()

            //Assert
            editProfile.validateLastname_box("'lastname' is required")
        })

        //ACT
        it('Diabled Email', () => {
            //Assert
            editProfile.validateEmail_box()
        })

        //ACT
        it('Null Password', () => {
            //clear password
            editProfile.clearPassword()
            //enter confirm password
            editProfile.enterConfirmpassword('22222222')
            //Assert
            editProfile.validateConfirmpassword_box('Passwords that you entered does not match')
        })

         //ACT
         it('Null Confirm Password', () => {
            //clear confirm password
            editProfile.clearConfirmpassword()
            //enter password
            editProfile.enterPassword('22222222')
            //Assert
            editProfile.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Password Less Than 8', () => {
            //clear password
            editProfile.clearPassword()
            //enter password
            editProfile.enterPassword('2222')
            //Assert
            editProfile.validatePassword_box("'password' must be at least 8 characters")
        })

        //ACT
        it('Password Not Match', () => {
            //clear password
            editProfile.clearPassword()
            //clear confirm password
            editProfile.clearConfirmpassword()

            //enter password
            editProfile.enterPassword('11111111')
            //enter confirm password
            editProfile.enterConfirmpassword('22222222')

            //Assert
            editProfile.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Show Password', () => {

            //click show password
            editProfile.clickShowpassword_button()

            //Assert
            editProfile.validateShowpassword_button()
        })

        //ACT
        it('Show Confrim Password', () => {

            //click show password
            editProfile.clickShowconfirmpassword_button()

            //Assert
            editProfile.validateShowconfirmpassword_button()
        })

        //ACT
        it('Edit without input password and confirm password', () => {

            //enter firstname
            editProfile.enterFirstname('Juggrid')
            //enter lastname
            editProfile.enterLastname('Chet')

            //clear password
            editProfile.clearPassword()
            //clear confirm password
            editProfile.clearConfirmpassword()

            //click submit
            editProfile.clickSubmit()
            cy.wait(1000)

            //Assert
            editProfile.validateSuccess('Juggrid Chet')
            
        })

        it('Edit Success', () => {

            editProfile.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
            //select project from dialog
            editProfile.clickProjectfromdialog()
            //click account menu (top-right)
            editProfile.clickAccountmenu()
            //click manage account menu
            editProfile.clickManageaccount()
            cy.wait(1000)

            //clear password
            editProfile.clearFirstname()
            //clear confirm password
            editProfile.clearLastname()
            
            //enter firstname
            editProfile.enterFirstname('Juggrid')
            //enter lastname
            editProfile.enterLastname('Chetwi')

            //enter password
            editProfile.enterPassword('22222222')
            //enter confirm password
            editProfile.enterConfirmpassword('22222222')

            //click submit
            editProfile.clickSubmit()
            cy.wait(1000)

            //Assert
            editProfile.validateSuccess('Juggrid Chetwi')
        })

        it('Login with New Password', () => {

            editProfile.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('22222222')
            loginPage.clickLogin()
            
            //Assert
            editProfile.validateLogin_newpassword('Please select project')
        })

        afterEach(()=>{
            cy.wait(500)
        })

        after(()=>{
            //Reset Data To Default
            editProfile.resetdata()
        })
    })
})
