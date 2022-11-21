///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { add } from "cypress/types/lodash"
import { AddUser, ValidateAdduser } from "../../Page_model/User management/Add_user_page"
const addUser = new AddUser()
const validateAdduser = new ValidateAdduser()



describe('Add User Page', () => {
    let base_url = 'https://dev.tax-accounting.finstable.co.th/login'

    context('Check All Element For Add User', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            addUser.login(base_url)
        })

        //ACT
        it('Firstname Box', () => {
            //Assert
            validateAdduser.validateFirstname_element()
        })

        //ACT
        it('Lastname Box', () => {
            //Assert
            validateAdduser.validateLastname_element()
        })

        //ACT
        it('Email Box', () => {
            //Assert
            validateAdduser.validateEmail_element()
        })

        //ACT
        it('Password Box', () => {
            //Assert
            validateAdduser.validatePassword_element()
        })

        //ACT
        it('Show Password Button', () => {
            //Assert
            validateAdduser.validateShow_password_element()
        })

        //ACT
        it('Confirm password Box', () => {
            //Assert
            validateAdduser.validateConfirmpassword_element()
        })

        //ACT
        it('Show Confirm Password Button', () => {
            //Assert
            validateAdduser.validateShow_confirmpassword_element()
        })

        it('Roles Box', () => {
            //Assert
            validateAdduser.validateRole_Box()
        })

        it('Roles => Super Admin', () => {
            //click role box
            addUser.clickRole_box()
            cy.wait(500)
            //Assert
            validateAdduser.validateRole_type('super-admin')
        })

        it('Roles => Developer', () => {
            //Assert
            validateAdduser.validateRole_type('developer')
        })

        it('Roles => Accounting', () => {
            //Assert
            validateAdduser.validateRole_type('accounting')
        })

        it('Project Box', () => {
            //Assert
            validateAdduser.validateProject_Box()
        })

        //ACT
        it('Submit Button', () => {
            //Assert
            validateAdduser.validateSubmit_element()
        })

        //after
        afterEach(()=>{
            cy.wait(500)
        })
    })

    context('All Add User Test', () => {
        //Arrange
        beforeEach(()=>{
            //cy.wait(500)
            cy.viewport(1920,1080)  
        })
        before(() => {
            cy.viewport(1920,1080)
            addUser.login(base_url)
        })

        //ACT
        it('Null Firstname', () => {
            //click submit
            addUser.clickSubmit()

            //Assert
            addUser.validateFirstname_box("'firstname' is required")
        })

        //ACT
        it('Null Lastname', () => {
            //enter firstname
            addUser.enterFirstname('Test1')

            //Assert
            addUser.validateLastname_box("'lastname' is required")
        })

        //ACT
        it('Null Email', () => {
            //enter lastname
            addUser.enterLastname('Test2')

            //Assert
            addUser.validateEmail_box('Please input your email!')
        })

        //ACT
        it('Wrong Format Email', () => {
            //enter email
            addUser.enterEmail('Test2.com')
            
            //Assert
            addUser.validateEmail_box('Please enter valid email')
        })

        //ACT
        it('Null Password', () => {
            //clear email
            addUser.clearEmail()
            //enter email
            addUser.enterEmail('Test@test.com')

            //enter confirm password
            addUser.enterConfirmpassword('22222222')
            //Assert
            addUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

         //ACT
         it('Null Confirm Password', () => {
            //clear confirm password
            addUser.clearConfirmpassword()
            //enter password
            addUser.enterPassword('22222222')
            //Assert
            addUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Password Less Than 8', () => {
            //clear password
            addUser.clearPassword()
            //enter password
            addUser.enterPassword('2222')
            //Assert
            addUser.validatePassword_box("'password' must be at least 8 characters")
        })

        //ACT
        it('Password Not Match', () => {
            //clear password
            addUser.clearPassword()
            //clear confirm password
            addUser.clearConfirmpassword()

            //enter password
            addUser.enterPassword('11111111')
            //enter confirm password
            addUser.enterConfirmpassword('22222222')

            //Assert
            addUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Password Case Sensitive', () => {
            //clear password
            addUser.clearPassword()
            //clear confirm password
            addUser.clearConfirmpassword()

            //enter password
            addUser.enterPassword('11111111A')
            //enter confirm password
            addUser.enterConfirmpassword('22222222a')

            //Assert
            addUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Confirm Password Case Sensitive', () => {
            //clear password
            addUser.clearPassword()
            //clear confirm password
            addUser.clearConfirmpassword()

            //enter password
            addUser.enterPassword('11111111a')
            //enter confirm password
            addUser.enterConfirmpassword('22222222A')

            //Assert
            addUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Show Password', () => {

            //click show password
            addUser.clickShowpassword_button()

            //Assert
            addUser.validateShowpassword_button()
        })

        //ACT
        it('Show Confrim Password', () => {

            //click show password
            addUser.clickShowconfirmpassword_button()

            //Assert
            addUser.validateShowconfirmpassword_button()
        })

        //ACT
        it('Null Role', () => {

            //Assert
            addUser.validateRole_box("'role' is required")
            
        })

        //ACT
        it('Search IN  Role', () => {
            // enter role box
            addUser.enterRole_box('developer')
            
            //Assert
            addUser.validateSearch_role_box('developer')
            
        })

        it('Null Project', () => {
            // select role developer
            addUser.clickRole_button('developer')
            // close dropdown
            addUser.clickRole_box()

            //Assert
            addUser.vaidateProject_box("'project' is required")
            
        })

        it('Search IN  Project', () => {
            // enter role box
            addUser.enterProject_box('Accounting')

            //Assert
            addUser.validateSearch_project_box('Accounting')
            
        })

        it('Email Case Sensitive', () => {
            addUser.login(base_url)

            addUser.createUser('Test1','Test2','CHAMP_PSU@outlook.co.th','11111111','11111111','developer','Accounting')

            //click submit
            addUser.clickSubmit()

            //assert
            addUser.validateEmail_case_sensitive('Email already exist')
            
        })

        it('Email already exist', () => {
            addUser.login(base_url)

            addUser.createUser('Test1','Test2','champ_psu@outlook.co.th','11111111','11111111','developer','Accounting')

            //assert
            addUser.validateEmail_case_sensitive('Email already exist')
            
        })

        it('Create User Success', () => {
            addUser.login(base_url)
            cy.wait(300)
            addUser.createUser('Test1','Test2','test@test.com','11111111','11111111','developer','Accounting')
            cy.wait(300)
            //assert
            addUser.validateSuccess('Your requested to create user successfully')
            
        })

        it('Check New User', () => {
            
            addUser.login(base_url)
            addUser.clickUsermanagement()
            cy.wait(500)
            //assert
            addUser.validateNew_user('test@test.com')
        })

        afterEach(()=>{
            cy.wait(500)
        })

        after(()=>{
            //Reset Data To Default
            addUser.resetdata()
        })
    })
})
