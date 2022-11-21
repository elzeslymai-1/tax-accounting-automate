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

context('Create Test Data', () => {
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

    it('Create 19 Cost', () => {
        //click Usermanagement menu
        cy.get(createCost_button).click()

        //2022
        addCost.createcost('Feb','Tech Cost','Smart Contract','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        addCost.createcost('Mar','Man Cost','Programmer','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        addCost.createcost('Apr','Man Cost','Project Owner','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        addCost.createcost('May','Man Cost','Tester','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        addCost.createcost('Jun','Man Cost','UX/UI Design','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        addCost.createcost('Jul','Due Diligence Cost','Operation','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        addCost.createcost('Aug','Consulting Cost','Tokenomist','Annually','Test cypress8','888','THB','888')
        cy.wait(2000)
        addCost.createcost('Sep','External Audit','Smart Contract Audit','One-time','Test cypress9','999','THB','999')
        cy.wait(2000)
        addCost.createcost('Oct','Tech Cost','Platform','Daily','Test cypress10','1000','THB','1000')
        cy.wait(2000)
        addCost.createcost('Nov','Man Cost','Programmer','Monthly','Test cypress11','1100','THB','1100')
        cy.wait(2000)
        addCost.createcost('Dec','Man Cost','Project Owner','Annually','Test cypress12','1200','THB','1200')
        cy.wait(2000)
        //2021
        addCost.createcost_before('Jan','Tech Cost','Platform','One-time','Test cypress1','111','THB','111')
        cy.wait(2000)
        addCost.createcost_before('Feb','Tech Cost','Smart Contract','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        addCost.createcost_before('Mar','Man Cost','Programmer','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        addCost.createcost_before('Apr','Man Cost','Project Owner','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        addCost.createcost_before('May','Man Cost','Tester','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        addCost.createcost_before('Jun','Man Cost','UX/UI Design','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        addCost.createcost_before('Jul','Due Diligence Cost','Operation','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        addCost.createcost_before('Aug','Consulting Cost','Tokenomist','Annually','Test cypress8','888','THB','888')

    })

    it.only('Create 19 Income', () => {
        //click Usermanagement menu
        cy.get(createIncome_button).click()

        //2022
        createIncome.createIncome('Feb','Hiring Cost','Platform','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        createIncome.createIncome('Mar','Dividend','Project Owner (Customer)','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        createIncome.createIncome('Apr','Dividend','Project Owner (Customer)','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        createIncome.createIncome('May','Share','Reserved Portion','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        createIncome.createIncome('Jun','Share','Reserved Portion','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        createIncome.createIncome('Jul','Transaction Fee','Others','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        createIncome.createIncome('Aug','Transaction Fee','Others','Annually','Test cypress8','888','THB','888')
        cy.wait(2000)
        createIncome.createIncome('Sep','Transaction Fee','Others','One-time','Test cypress9','999','THB','999')
        cy.wait(2000)
        createIncome.createIncome('Oct','Transaction Fee','Others','Daily','Test cypress10','1000','THB','1000')
        cy.wait(2000)
        createIncome.createIncome('Nov','Share','Reserved Portion','Monthly','Test cypress11','1100','THB','1100')
        cy.wait(2000)
        createIncome.createIncome('Dec','Share','Reserved Portion','Annually','Test cypress12','1200','THB','1200')
        cy.wait(2000)
        //2021
        createIncome.createIncome_before('Jan','Dividend','Project Owner (Customer)','One-time','Test cypress1','111','THB','111')
        cy.wait(2000)
        createIncome.createIncome_before('Feb','Dividend','Project Owner (Customer)','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        createIncome.createIncome_before('Mar','Hiring Cost','Platform','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        createIncome.createIncome_before('Apr','Hiring Cost','Platform','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        createIncome.createIncome_before('May','Hiring Cost','Platform','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        createIncome.createIncome_before('Jun','Dividend','Project Owner (Customer)','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        createIncome.createIncome_before('Jul','Share','Reserved Portion','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        createIncome.createIncome_before('Aug','Transaction Fee','Others','Annually','Test cypress8','888','THB','888')

    })
})