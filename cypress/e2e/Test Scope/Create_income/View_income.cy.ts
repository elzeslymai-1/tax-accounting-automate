///<reference types="cypress" />
import { view_income } from "../../Page_model/Create_income/View_income"
import { Createincome } from "../../Page_model/Create_income/Add_income"


const viewincome = new view_income()
const createincome = new Createincome()


describe('View Income ', () => {

    beforeEach('setup before test', () => {
        cy.viewport(1920, 1080)
    })
    before('login', () => {
        cy.viewport(1920, 1080)
        viewincome.Login()

    })
        context('View Income', () => {
        
        //ACT Add income success 
        it('View Income', () => {
            createincome.createIncome('Jan','Reserved Portion','Share','Daily','Test cypress3','123456','THB','123456')
            cy.wait(2000)
            createincome.createIncome('Jan','Reserved Portion','Share','Daily','Test cypress2','12345','THB','12345')
            cy.wait(2000)
            viewincome.clickView_button()
            //ASSET
            viewincome.validatetext_income('Income')
            viewincome.validatetext_amountthb1('123,456.00')
            viewincome.validatetext_amountthb2('12,345.00')
            viewincome.validatetext_amountthb3('135,801.00')

        })
        after(() => {
            createincome.clickCreateincomemenu()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            
        })
        afterEach(() => {
            cy.wait(500)
        })
    })
})