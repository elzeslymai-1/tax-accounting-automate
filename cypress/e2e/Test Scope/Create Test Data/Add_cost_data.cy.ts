///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { LoginPage } from "../../Page_model/Login page/Login_page"
import { AddCost } from "../../Page_model/Create cost page/Add_cost_page"


const loginPage = new LoginPage()
const addCost = new AddCost()

let createCost_button = '[data-menu-id$=cost-management]'

context('Create Cost Data', () => {
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
})