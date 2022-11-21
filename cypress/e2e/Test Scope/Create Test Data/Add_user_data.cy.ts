///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { LoginPage } from "../../Page_model/Login page/Login_page"
import { AddUser } from "../../Page_model/User management/Add_user_page"

const loginPage = new LoginPage()
const addUser = new AddUser()



let userManagement_button = '[data-menu-id$=user-management]'

context('Create User Data', () => {
    //Arrange

    //set resolution
    beforeEach(() => {
        cy.viewport(1920, 1080)

        //login
        cy.visit(Cypress.env('base_user'))
        loginPage.enterUsername(Cypress.env('login').super_admin.username)
        loginPage.enterPassword(Cypress.env('login').super_admin.password)
        loginPage.clickLogin()
        //select project from dialog
        cy.get('.ant-modal-body > .flex-col > :nth-child(2)').click()
    })

    it('Create 19 User', () => {
        //click Usermanagement menu
        cy.get(userManagement_button).click()

        addUser.call_createUser(
            Cypress.env('create_user_data').user_accounting.firstname,
            Cypress.env('create_user_data').user_accounting.lastname,
            Cypress.env('create_user_data').user_accounting.username,
            Cypress.env('create_user_data').user_accounting.password,
            Cypress.env('create_user_data').user_accounting.confirm_pass,
            Cypress.env('create_user_data').user_accounting.role,
            Cypress.env('create_user_data').user_accounting.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_developer.firstname,
            Cypress.env('create_user_data').user_developer.lastname,
            Cypress.env('create_user_data').user_developer.username,
            Cypress.env('create_user_data').user_developer.password,
            Cypress.env('create_user_data').user_developer.confirm_pass,
            Cypress.env('create_user_data').user_developer.role,
            Cypress.env('create_user_data').user_developer.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_1.firstname,
            Cypress.env('create_user_data').user_1.lastname,
            Cypress.env('create_user_data').user_1.username,
            Cypress.env('create_user_data').user_1.password,
            Cypress.env('create_user_data').user_1.confirm_pass,
            Cypress.env('create_user_data').user_1.role,
            Cypress.env('create_user_data').user_1.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_2.firstname,
            Cypress.env('create_user_data').user_2.lastname,
            Cypress.env('create_user_data').user_2.username,
            Cypress.env('create_user_data').user_2.password,
            Cypress.env('create_user_data').user_2.confirm_pass,
            Cypress.env('create_user_data').user_2.role,
            Cypress.env('create_user_data').user_2.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_3.firstname,
            Cypress.env('create_user_data').user_3.lastname,
            Cypress.env('create_user_data').user_3.username,
            Cypress.env('create_user_data').user_3.password,
            Cypress.env('create_user_data').user_3.confirm_pass,
            Cypress.env('create_user_data').user_3.role,
            Cypress.env('create_user_data').user_3.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_4.firstname,
            Cypress.env('create_user_data').user_4.lastname,
            Cypress.env('create_user_data').user_4.username,
            Cypress.env('create_user_data').user_4.password,
            Cypress.env('create_user_data').user_4.confirm_pass,
            Cypress.env('create_user_data').user_4.role,
            Cypress.env('create_user_data').user_4.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_5.firstname,
            Cypress.env('create_user_data').user_5.lastname,
            Cypress.env('create_user_data').user_5.username,
            Cypress.env('create_user_data').user_5.password,
            Cypress.env('create_user_data').user_5.confirm_pass,
            Cypress.env('create_user_data').user_5.role,
            Cypress.env('create_user_data').user_5.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_6.firstname,
            Cypress.env('create_user_data').user_6.lastname,
            Cypress.env('create_user_data').user_6.username,
            Cypress.env('create_user_data').user_6.password,
            Cypress.env('create_user_data').user_6.confirm_pass,
            Cypress.env('create_user_data').user_6.role,
            Cypress.env('create_user_data').user_6.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_7.firstname,
            Cypress.env('create_user_data').user_7.lastname,
            Cypress.env('create_user_data').user_7.username,
            Cypress.env('create_user_data').user_7.password,
            Cypress.env('create_user_data').user_7.confirm_pass,
            Cypress.env('create_user_data').user_7.role,
            Cypress.env('create_user_data').user_7.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_8.firstname,
            Cypress.env('create_user_data').user_8.lastname,
            Cypress.env('create_user_data').user_8.username,
            Cypress.env('create_user_data').user_8.password,
            Cypress.env('create_user_data').user_8.confirm_pass,
            Cypress.env('create_user_data').user_8.role,
            Cypress.env('create_user_data').user_8.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_9.firstname,
            Cypress.env('create_user_data').user_9.lastname,
            Cypress.env('create_user_data').user_9.username,
            Cypress.env('create_user_data').user_9.password,
            Cypress.env('create_user_data').user_9.confirm_pass,
            Cypress.env('create_user_data').user_9.role,
            Cypress.env('create_user_data').user_9.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_10.firstname,
            Cypress.env('create_user_data').user_10.lastname,
            Cypress.env('create_user_data').user_10.username,
            Cypress.env('create_user_data').user_10.password,
            Cypress.env('create_user_data').user_10.confirm_pass,
            Cypress.env('create_user_data').user_10.role,
            Cypress.env('create_user_data').user_10.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_11.firstname,
            Cypress.env('create_user_data').user_11.lastname,
            Cypress.env('create_user_data').user_11.username,
            Cypress.env('create_user_data').user_11.password,
            Cypress.env('create_user_data').user_11.confirm_pass,
            Cypress.env('create_user_data').user_11.role,
            Cypress.env('create_user_data').user_11.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_12.firstname,
            Cypress.env('create_user_data').user_12.lastname,
            Cypress.env('create_user_data').user_12.username,
            Cypress.env('create_user_data').user_12.password,
            Cypress.env('create_user_data').user_12.confirm_pass,
            Cypress.env('create_user_data').user_12.role,
            Cypress.env('create_user_data').user_12.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_13.firstname,
            Cypress.env('create_user_data').user_13.lastname,
            Cypress.env('create_user_data').user_13.username,
            Cypress.env('create_user_data').user_13.password,
            Cypress.env('create_user_data').user_13.confirm_pass,
            Cypress.env('create_user_data').user_13.role,
            Cypress.env('create_user_data').user_13.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_14.firstname,
            Cypress.env('create_user_data').user_14.lastname,
            Cypress.env('create_user_data').user_14.username,
            Cypress.env('create_user_data').user_14.password,
            Cypress.env('create_user_data').user_14.confirm_pass,
            Cypress.env('create_user_data').user_14.role,
            Cypress.env('create_user_data').user_14.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_15.firstname,
            Cypress.env('create_user_data').user_15.lastname,
            Cypress.env('create_user_data').user_15.username,
            Cypress.env('create_user_data').user_15.password,
            Cypress.env('create_user_data').user_15.confirm_pass,
            Cypress.env('create_user_data').user_15.role,
            Cypress.env('create_user_data').user_15.project
        )

        addUser.call_createUser(
            Cypress.env('create_user_data').user_16.firstname,
            Cypress.env('create_user_data').user_16.lastname,
            Cypress.env('create_user_data').user_16.username,
            Cypress.env('create_user_data').user_16.password,
            Cypress.env('create_user_data').user_16.confirm_pass,
            Cypress.env('create_user_data').user_16.role,
            Cypress.env('create_user_data').user_16.project
        )
    })
})