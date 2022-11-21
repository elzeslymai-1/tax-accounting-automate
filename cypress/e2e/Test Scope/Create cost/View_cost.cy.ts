///<reference types="cypress" />
import { view_cost } from "../../Page_model/Create cost page/View_cost"
import {AddCost} from "../../Page_model/Create cost page/Add_cost_page"


const viewcost = new view_cost()
const Addcost = new AddCost()


describe('View Cost ', () => {

    beforeEach('setup before test', () => {
        cy.viewport(1920, 1080)
    })
    before('login', () => {
        cy.viewport(1920, 1080)
        viewcost.Login()

    })
        context('View Cost', () => {
        
        //ACT Add income success 
        it('View Cost', () => {
            Addcost.createcost('Jan','Due Diligence Cost','Operation','Daily','Test cypress3','123456','THB','123456')
            cy.wait(2000)
            Addcost.createcost('Jan','Tech Cost','Smart Contract','Daily','Test cypress2','12345','THB','12345')
            cy.wait(2000)
            viewcost.clickView_button()
            //ASSET
            viewcost.validatetext_income('Development Cost')
            viewcost.validatetext_amountthb1('123,456.00')
            viewcost.validatetext_amountthb2('12,345.00')
            viewcost.validatetext_amountthb3('135,801.00')

        })
        after(() => {
            Addcost.clickCreatecostmenu()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            
        })
        afterEach(() => {
            cy.wait(500)
        })
    })
})