///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { LoginPage } from "../../Page_model/Login page/Login_page"
import { AddUser } from "../../Page_model/User management/Add_user_page"
import { AddCost } from "../../Page_model/Create cost page/Add_cost_page"
import { Createincome } from "../../Page_model/Create_income/Add_income"

const loginPage = new LoginPage()
const addUser = new AddUser()
const addCost = new AddCost()
const createIncome = new Createincome()

let createCost_button = '[data-menu-id$=cost-management]'
let createIncome_button = '[data-menu-id$=income-management]'
let userManagement_button = '[data-menu-id$=user-management]'

context('Delete Test Data', () => {
    //Arrange

    //set resolution
    beforeEach(() => {
        cy.viewport(1920, 1080)

        //login
        cy.visit(Cypress.env('base_url'))
        loginPage.enterUsername(Cypress.env('login').super_admin.username)
        loginPage.enterPassword(Cypress.env('login').super_admin.password)
        loginPage.clickLogin()
        //select project from dialog
        cy.get('.ant-modal-body > .flex-col > :nth-child(2)').click()
    })

    it('Delete 18 User', () => {
        //click Usermanagement menu
        cy.get(userManagement_button).click()
        addUser.deleteUser()
    })

    it('Delete 20 Cost', () => {
        //click Usermanagement menu
        cy.get(createCost_button).click()

        addCost.Delete_Creat_cost()
    })

    it('Delete 20 Income', () => {
        //click Usermanagement menu
        cy.get(createIncome_button).click()
        createIncome.Delete_Creat_income()
    })
})