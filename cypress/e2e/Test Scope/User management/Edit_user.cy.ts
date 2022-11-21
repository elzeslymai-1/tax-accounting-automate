///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { EditUser, ValidateEditUser } from "../../Page_model/User management/Edit_user_page"
import { AddUser } from "../../Page_model/User management/Add_user_page"
import { curryRight } from "cypress/types/lodash"
const editUser = new EditUser()
const ValidateEdituser = new ValidateEditUser()
const addUser = new AddUser()


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
            editUser.login(base_url)
            editUser.clickAdd_button()
            addUser.createUser('Test1','Test2','test@test.com','11111111','11111111','developer','Accounting')
            cy.wait(600)
            editUser.clickEdit_button()
        })

        //ACT
        it('Firstname Box', () => {
            cy.wait(500)
            //Assert
            ValidateEdituser.validateFirstname_element()
        })

        //ACT
        it('Lastname Box', () => {
            //Assert
            ValidateEdituser.validateLastname_element()
        })

        //ACT
        it('Email Box', () => {
            //Assert
            ValidateEdituser.validateEmail_element()
        })

        //ACT
        it('Password Box', () => {
            //Assert
            ValidateEdituser.validatePassword_element()
        })

        //ACT
        it('Show Password Button', () => {
            //Assert
            ValidateEdituser.validateShow_password_element()
        })

        //ACT
        it('Confirm password Box', () => {
            //Assert
            ValidateEdituser.validateConfirmpassword_element()
        })

        //ACT
        it('Show Confirm Password Button', () => {
            //Assert
            ValidateEdituser.validateShow_confirmpassword_element()
        })

        it('Roles Box', () => {
            //Assert
            ValidateEdituser.validateRole_Box()
        })

        it('Roles => Super Admin', () => {
            //click role box
            addUser.clickRole_box()
            cy.wait(500)
            //Assert
            ValidateEdituser.validateRole_type('super-admin')
        })

        it('Roles => Developer', () => {
            //Assert
            ValidateEdituser.validateRole_type('developer')
        })

        it('Roles => Accounting', () => {
            //Assert
            ValidateEdituser.validateRole_type('accounting')
        })

        it('Project Box', () => {
            //Assert
            ValidateEdituser.validateProject_Box()
        })

        //ACT
        it('Submit Button', () => {
            //Assert
            ValidateEdituser.validateSubmit_element()        
        })

        //after
        afterEach(()=>{
            cy.wait(500)
        })
    })

    context('All Edit User Test', () => {
        //Arrange
        beforeEach(()=>{
            //cy.wait(500)
            cy.viewport(1920,1080)  
        })
        before(() => {
            cy.viewport(1920,1080)
            editUser.login(base_url)
            cy.wait(600)
            editUser.clickEdit_button()
            cy.wait(500)
        })

        //ACT
        it('Check Show Firstname', () => {
            //Assert
            editUser.validateShowFirstname('Test1')
        })

        //ACT
        it('Check Show Lastname', () => {
            //Assert
            editUser.validateShowLastname('Test2')
        })

        //ACT
        it('Null Firstname', () => {
            //clear firstname
            editUser.clearFirstname()
            //Assert
            editUser.validateFirstname_box("'firstname' is required")
        })

        //ACT
        it('Null Lastname', () => {
            //clear lastname
            editUser.clearLastname()

            //Assert
            editUser.validateLastname_box("'lastname' is required")
        })

        //ACT
        it('Diabled Email', () => {
            //Assert
            editUser.validateEmail_box()
        })

        //ACT
        it('Null Password', () => {

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
            editUser.clearPassword()
            //enter password
            editUser.enterPassword('2222')
            //Assert
            editUser.validatePassword_box("'password' must be at least 8 characters")
        })

        //ACT
        it('Password Not Match', () => {
            //clear password
            editUser.clearPassword()

            //enter password
            editUser.enterPassword('11111111')
            //enter confirm password
            editUser.enterConfirmpassword('22222222')

            //Assert
            editUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Password Case Sensitive', () => {
            //clear password
            editUser.clearPassword()
            //clear confirm password
            editUser.clearConfirmpassword()

            //enter password
            editUser.enterPassword('11111111A')
            //enter confirm password
            editUser.enterConfirmpassword('22222222a')

            //Assert
            editUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Confirm Password Case Sensitive', () => {
            //clear password
            editUser.clearPassword()
            //clear confirm password
            editUser.clearConfirmpassword()

            //enter password
            editUser.enterPassword('11111111a')
            //enter confirm password
            editUser.enterConfirmpassword('22222222A')

            //Assert
            editUser.validateConfirmpassword_box('Passwords that you entered does not match')
        })

        //ACT
        it('Show Password', () => {

            //click show password
            editUser.clickShowpassword_button()

            //Assert
            editUser.validateShowpassword_button()
        })

        //ACT
        it('Show Confrim Password', () => {

            //click show password
            editUser.clickShowconfirmpassword_button()

            //Assert
            editUser.validateShowconfirmpassword_button()
        })

        //ACT
        it('Check Show Role', () => {

            //Assert
            editUser.validateShowRole('developer')
        })

        //ACT
        it('Check Show Project', () => {

            //Assert
            editUser.validateShowProject('Accounting')
        })

        //ACT
        it('Null Role', () => {
            //clear role box
            editUser.clickDelete_role_button()
            //Assert
            editUser.validateRole_box("'role' is required")
            
        })

        //ACT
        it('Search IN  Role', () => {
            // enter role box
            editUser.enterRole_box('developer')
            
            //Assert
            editUser.validateSearch_role_box('developer')
            
        })

        //ACT
        it('Null Project', () => {
            //close role dropdown
            editUser.clickRole_box()

            //clear project box
            editUser.clickDelete_project_button()

            //Assert
            editUser.vaidateProject_box("'project' is required")
            
        })

        //ACT
        it('Search IN  Project', () => {
            // enter role box
            editUser.enterProject_box('Accounting')

            //Assert
            editUser.validateSearch_project_box('Accounting')
            
        })

        //ACT
        it('Edit User Without Input Password&Confirm Password', () => {
            //login
            editUser.login(base_url)
            cy.wait(500)
            editUser.clickEdit_button()
            cy.wait(1000)
            //edit user
            editUser.editUser('Test1','Test2','','','developer','Accounting')

            //assert
            editUser.validateSuccess('Your requested to update user successfully, Please login again')
            
        })

        //ACT
        it('Edit User Success (Input Password&Confirm Password)', () => {
            //login
            editUser.login(base_url)
            cy.wait(500)
            editUser.clickEdit_button()
            cy.wait(1000)
            //edit user
            editUser.editUser('Test3','Test3','22222222','22222222','developer','Accounting')

            //assert
            editUser.validateSuccess('Your requested to update user successfully, Please login again')
            
        })

        //ACT
        it('Login With New Password)', () => {
            //assert
            editUser.validateLogin_new_password('Please select project', base_url)
            
        })

        //ACT
        it('Check Edit User', () => {
            
            editUser.login(base_url)
            cy.wait(1000)
            //assert
            editUser.validateEdit_user('Test3 Test3')
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
