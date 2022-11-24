///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { LoginPage } from "../../Page_model/Login page/Login_page"
import { AddUser } from "../../Page_model/User management/Add_user_page"
import { AddCost } from "../../Page_model/Create cost page/Add_cost_page"
import { Createincome } from "../../Page_model/Create_income/Add_income"

const loginPage = new LoginPage()
const createIncome = new Createincome()


let createIncome_button = '[data-menu-id$=income-management]'


context('Create Income Data', () => {
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

    it('Create 19 Income', () => {
        //click Usermanagement menu
        cy.get(createIncome_button).click()

        //2022
        createIncome.createIncome('Feb','Reserved Portion','Share','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        createIncome.createIncome('Mar','Reserved Portion','Share','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        createIncome.createIncome('Apr','Reserved Portion','Share','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        createIncome.createIncome('May','Reserved Portion','Share','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        createIncome.createIncome('Jun','Reserved Portion','Share','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        createIncome.createIncome('Jul','Reserved Portion','Share','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        createIncome.createIncome('Aug','Reserved Portion','Share','Annually','Test cypress8','888','THB','888')
        cy.wait(2000)
        createIncome.createIncome('Sep','Reserved Portion','Share','One-time','Test cypress9','999','THB','999')
        cy.wait(2000)
        createIncome.createIncome('Oct','Reserved Portion','Share','Daily','Test cypress10','1000','THB','1000')
        cy.wait(2000)
        createIncome.createIncome('Nov','Reserved Portion','Share','Monthly','Test cypress11','1100','THB','1100')
        cy.wait(2000)
        createIncome.createIncome('Dec','Reserved Portion','Share','Annually','Test cypress12','1200','THB','1200')
        cy.wait(2000)
        //2021
        createIncome.createIncome_before('Jan','Reserved Portion','Share','One-time','Test cypress1','111','THB','111')
        cy.wait(2000)
        createIncome.createIncome_before('Feb','Reserved Portion','Share','Daily','Test cypress2','222','THB','222')
        cy.wait(2000)
        createIncome.createIncome_before('Mar','Reserved Portion','Share','Monthly','Test cypress3','333','THB','333')
        cy.wait(2000)
        createIncome.createIncome_before('Apr','Reserved Portion','Share','Annually','Test cypress4','444','THB','444')
        cy.wait(2000)
        createIncome.createIncome_before('May','Reserved Portion','Share','One-time','Test cypress5','555','THB','555')
        cy.wait(2000)
        createIncome.createIncome_before('Jun','Reserved Portion','Share','Daily','Test cypress6','666','THB','666')
        cy.wait(2000)
        createIncome.createIncome_before('Jul','Reserved Portion','Share','Monthly','Test cypress7','777','THB','777')
        cy.wait(2000)
        createIncome.createIncome_before('Aug','Reserved Portion','Share','Annually','Test cypress8','888','THB','888')

    })
})