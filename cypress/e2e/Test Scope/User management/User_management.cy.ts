///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { UserManagement, ValidateUsermanagement } from "../../Page_model/User management/User_management_page"
import { AddUser } from "../../Page_model/User management/Add_user_page"
const usermanagement = new UserManagement()
const validateUsermanagement = new ValidateUsermanagement()
const addUser = new AddUser()



describe('User Management Page', () => {
    let base_url = Cypress.env('base_url')

    context('Check All Element For User Management', () => {
        //Arrange

        //set resolution
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before('Setup Before Test', () => {

            cy.viewport(1920, 1080)
            //login
            usermanagement.login(base_url)
            addUser.clickAdd_button()
            addUser.createUser('Test','Accounting1','accounting1@test.com','11111111','11111111','developer','Accounting')

        })

        //ACT
        it('Check => Search box', () => {
            cy.wait(4000)
            //Assert
            validateUsermanagement.validateSearch_box_element()
        })

        //ACT
        it('Check => Filter Dropdown Button', () => {
            //Assert
            validateUsermanagement.validateFilter_button_element()
        })

        //ACT
        it('Check => Filter Role All', () => {
            //click filter button
            usermanagement.clickFilter_dropdown()
            cy.wait(1000)
            //Assert
            validateUsermanagement.validateFilter_role_all_element()
        })

        //ACT
        it('Check => Filter Role Super Admin', () => {
            //Assert
            validateUsermanagement.validateFilter_role_superadmin_element()
        })

        //ACT
        it('Check => Filter Role Developer', () => {
            //Assert
            validateUsermanagement.validateFilter_role_developer_element()
        })

        //ACT
        it('Check => Filter Role Accounting', () => {
            //Assert
            validateUsermanagement.validateFilter_role_accounting_element()
        })

        //ACT
        it('Check => Add button', () => {
            //Assert
            validateUsermanagement.validateAdd_button_element()
        })

        //ACT
        it('Check => Edit Button', () => {
            //Assert
            validateUsermanagement.validateEdit_button_element()
        })

        //ACT
        it('Check => Delete Button', () => {
            //Assert
            validateUsermanagement.validateDelete_button_element()
        })

        //ACT
        it('Check => Page...Of.. ', () => {
            //Assert
            validateUsermanagement.validatePage_of_element()
        })

        //ACT
        it('Check => Previous Page Button', () => {
            //Assert
            validateUsermanagement.validatePrevious_page_button_element()
        })

        //ACT
        it('Check => Item Per Page Button', () => {
            //Assert
            validateUsermanagement.validateItem_per_page_button_element()
        })

        //ACT
        it('Check => Next Page Button', () => {
            //Assert
            validateUsermanagement.validateNext_page_button_element()
        })

        //ACT
        it('Check => Delete Dialog', () => {
            //click delete
            usermanagement.clickDelete_button()

            //Assert
            validateUsermanagement.validateDelete_dialog()
        })

        afterEach(() => {
            cy.wait(500)
        })
    })

    context('All Accounting Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
            usermanagement.login(base_url)
        })

        //ACT
        it('Search With Firstname', () => {
            cy.wait(500)
            //enter firstname
            usermanagement.enterSearch_box('Juggrid')
            cy.wait(500)
            //Assert
            usermanagement.validateSearch_box_first_name('Juggrid')
        })

        //ACT
        it('Search With Lastname', () => {

            //enter firstname
            usermanagement.enterSearch_box('Chetwichian')
            cy.wait(500)

            //Assert
            usermanagement.validateSearch_box__last_name('Chetwichian')
        })

        //ACT
        it('Search With Email', () => {

            //enter firstname
            usermanagement.enterSearch_box('champ_psu@outlook.co.th')
            cy.wait(500)

            //Assert
            usermanagement.validateSearch_box_Email('champ_psu@outlook.co.th')
        })

        //ACT
        it('Search With Case Sensitive', () => {

            //enter firstname
            usermanagement.enterSearch_box('juggrid')
            cy.wait(500)

            //Assert
            usermanagement.validateSearch_box_first_name('Juggrid')
        })

        it('Search With Number', () => {

            //enter firstname
            usermanagement.enterSearch_box('1')
            cy.wait(500)

            //Assert
            usermanagement.validateSearch_box_Email('1')
        })

        it('Search With Symbol', () => {

            //enter firstname
            usermanagement.enterSearch_box('@')
            cy.wait(500)

            //Assert
            usermanagement.validateSearch_box_Email('@')
        })

        //ACT
        it('Filter Super Admin', () => {
            
            //click filter dropdown
            cy.wait(500)
            usermanagement.clickFilter_dropdown()
            //click role super admin
            cy.wait(500)
            usermanagement.clickFilter_role_superadmin()

            //Assert
            cy.wait(500)
            usermanagement.validateFilter_super_admin()
        })

        //ACT
        it('Filter Developer', () => {
            //click filter dropdown
            cy.wait(500)
            usermanagement.clickFilter_dropdown()
            //click role developer
            cy.wait(500)
            usermanagement.clickFilter_role_developer()

            //Assert
            cy.wait(500)
            usermanagement.validateFilter_developer()
        })

        //ACT
        it('Filter Accounting', () => {
            
            //click filter dropdown
            cy.wait(500)
            usermanagement.clickFilter_dropdown()
            //click role accounting
            cy.wait(500)
            usermanagement.clickFilter_role_accounting()

            //Assert
            cy.wait(500)
            usermanagement.validateFilter_accounting()
        })

        //ACT
        it('Click => Add User', () => {
            //click add
            usermanagement.clickAdd_button()

            //Assert
            usermanagement.validateAdd_button('Create User Manangement')
            
        })

        //ACT
        it('Click => Edit User', () => {
            //click edit
            usermanagement.clickEdit_button()

            //Assert
            usermanagement.validateEdit_button('Edit User Manangement')
            
        })

        //ACT
        it('Click => Delete User', () => {
            //click delete
            usermanagement.clickDelete_button()

            //Assert
            usermanagement.validateDelete_button('Are you sure delete this user?')
            
        })

        //ACT
        it('Click => Cancel Delete ', () => {
            //click delete
            usermanagement.clickDelete_button()

            //click cancel delete
            usermanagement.clickCancel_delete_button()
            
            //Assert
            cy.wait(500)
            usermanagement.validateCancel_delete_button()
            
        })

        //ACT
        it('Click => 10 Item Per Page ', () => {
            //enter item
            usermanagement.selectItem_per_page_button('10') 

            //Assert
            cy.wait(500)
            usermanagement.validateItem_per_page_button(10)
        })

        
        //ACT
        it('Click => 15 Item Per Page ', () => {
            //enter item
            usermanagement.selectItem_per_page_button('15') 

            //Assert
            cy.wait(500)
            usermanagement.validateItem_per_page_button(15)
        })

        //ACT
        it('Click => 20 Item Per Page ', () => {
            //enter item
            usermanagement.selectItem_per_page_button('20') 

            //Assert
            cy.wait(500)
            usermanagement.validateItem_per_page_button(20)
        })

        //ACT
        it('Click => Next Page', () => {
            //click next page
            usermanagement.clickNext_page_button()

            //Assert
            cy.wait(500)
            usermanagement.validateNext_page_button('page 2')
        })

        it('Click => Previous Page', () => {
            //click next page
            usermanagement.clickNext_page_button()
            //click previous page
            usermanagement.clickPrevious_page_button()

            //Assert
            cy.wait(500)
            usermanagement.validatePrevious_page_button('page 1')
        })

        it('Click => Delete Success', () => {
            
            //click delete button
            usermanagement.clickDelete_button()
            //click confirm delete
            usermanagement.clickConfirm_delete_button()

            //Assert
            cy.wait(500)
            usermanagement.validatDelete_button('accounting@test.com')
        })

        afterEach(() => {
            cy.wait(500)
        })

    })
})
