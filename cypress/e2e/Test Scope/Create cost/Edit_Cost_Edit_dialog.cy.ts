///<reference types="cypress" />
import {AddCost} from "../../Page_model/Create cost page/Add_cost_page"
import { EditCostdialog } from "../../Page_model/Create cost page/Edit_Cost_Edit_dialog_page"

const Addcost = new AddCost()
const Edit_Costdialog = new EditCostdialog()

describe('Edit Cost Edit dialog Test', () => {

    beforeEach('', () => {
        cy.viewport(1920, 1080)

    })
    before('setup before test', () => {
        cy.viewport(1920, 1080)
       //Login
       Edit_Costdialog.Login()

    })

    context('Edit Cost Edit dialog', () => {

        //ACT Create Cost
        it('Create Cost', () => {
            
            //Enter cost Detail
            Addcost.clickAdd()
            Addcost.enterMonth('Jan')
            Addcost.enterCategory('Tech Cost')
            Addcost.enterSubcategory('Platform')
            Addcost.enterType('Daily')
            Addcost.enterItem('Test Cypress')
            Addcost.enterAmount('123456')
            Addcost.enterCurrency('THB')
            Addcost.enterAmount_THB('123456')
            Addcost.clickAddbutton()
            Addcost.clickSubmit()
            //Assert
            Addcost.validateAddincome_success('Tech Cost','Platform','Daily','Test Cypress','123,456.00','THB','123,456.00')
        })
        //ACT Null Item
        it('Null Item', () => {
            Edit_Costdialog.Login()
            cy.wait(500)
            Edit_Costdialog.clickEdit_button()
            cy.wait(1000)
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearItem() 
            Edit_Costdialog.clickUpdatebutton()
            
            //Assert
            Edit_Costdialog.validateFail_Item("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {
            Edit_Costdialog.enterItem('test') 
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.clickUpdatebutton()
            //Assert
            Edit_Costdialog.validateFail_Amount("'amount' is required")
        })   
        
        //ACT Amount input negative
        it('Amount input negative',() =>{
            Edit_Costdialog.enterAmount('-20')
            Edit_Costdialog.clickUpdatebutton()

            //Assert
            Edit_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector',() => {
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('Fin')

            //Assert
            Edit_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol',() => {
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('@#$%^')

            //Assert
            Edit_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input 0
        it('Amount input 0',() => {
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('0')
            Edit_Costdialog.clickUpdatebutton()

            //Assert
            Edit_Costdialog.ValidateSuccess_Amount('0')
            
        })

        //ACT Amount input decimal
        it('Amount input decimal',() => {
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('0.1')
            Edit_Costdialog.clickUpdatebutton()

            //Assert
            Edit_Costdialog.ValidateSuccess_Amount('0.1')
        })

        //ACT Amount input decimal 4 position
        it('Amount input decimal 4 position',() => {
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('0.1111')
            Edit_Costdialog.clickUpdatebutton()

            //Assert
            Edit_Costdialog.ValidateSuccess_Amount('0.1111')
        })

        //ACT Null Currency 
        it('Null Currency',() => {
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearAmount()
            Edit_Costdialog.enterAmount('123456')
            Edit_Costdialog.clearcurrency()

            //Assert
            Edit_Costdialog.validateFail_Currency("'currency' is required")    
        })

        //ACT Currency charector over 4
        it('Currency charector over 4',() => {
            Edit_Costdialog.enterCurrency('First')

            //Assert
            Edit_Costdialog.validateFail_Currency("'currency' cannot be longer than 4 characters")  
        })

        //ACT Null Amount_THB
        it('Null Amount_THB',() => {
            Edit_Costdialog.clearcurrency()
            Edit_Costdialog.enterCurrency('THB')
            Edit_Costdialog.clearamountthb()
            
            //Assert
            Edit_Costdialog.validateFail_AmountThb("'amountThb' is required")  
        })

        //ACT Amount_THB input negative
        it('Amount_THB input negative',() => {
            Edit_Costdialog.enterAmountthb('-20')

            //Assert
            Edit_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector',() => {
            Edit_Costdialog.clearamountthb()
            Edit_Costdialog.enterAmountthb('cypress')

            //Assert
            Edit_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol',() => {
            Edit_Costdialog.clearamountthb()
            Edit_Costdialog.enterAmountthb('@#$%^')

            //Assert
            Edit_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input 0
        it('Amount_THB input 0',() => {
            Edit_Costdialog.clearamountthb()
            Edit_Costdialog.enterAmountthb('0')
            Edit_Costdialog.clickUpdatebutton()
            //Assert
            Edit_Costdialog.ValidateSuccess_AmountThb('0') 
        })

        //ACT Amount_THB input decimal
        it('Amount_THB input decimal',() => {
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearamountthb()
            Edit_Costdialog.enterAmountthb('0.1')
            Edit_Costdialog.clickUpdatebutton()

            //Assert
            Edit_Costdialog.ValidateSuccess_AmountThb('0.1') 
        })

        //ACT Amount_THB input decimal 4 position
        it('Amount_THB input decimal',() => {
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.clearamountthb()
            Edit_Costdialog.enterAmountthb('0.1111')
            Edit_Costdialog.clickUpdatebutton()
            //Assert
            Edit_Costdialog.ValidateSuccess_AmountThb('0.1111')
        })

        //check edit
        it('check edit', () => {
            Edit_Costdialog.clickEdit_button()
            Edit_Costdialog.clickEditbutton1()
            Edit_Costdialog.enterCategory('Man Cost')
            Edit_Costdialog.enterSubcategory('Project Owner')
            Edit_Costdialog.enterType('Monthly')   
            Edit_Costdialog.clearItem() 
            Edit_Costdialog.enterItem('test')   
            Edit_Costdialog.clickUpdatebutton()
            //Assert 
            Edit_Costdialog.ValidateSuccess_Category('Man Cost')
            Edit_Costdialog.ValidateSuccess_Subcategory('Project Owner')
            Edit_Costdialog.ValidateSuccess_Type('Monthly')
            Edit_Costdialog.ValidateSuccess_Item('test')
        })

        //check create
        it('check create', () => {
            Edit_Costdialog.Login()
            
            //Assert 
            Edit_Costdialog.validateSuccess_income('Cost Manangement')
        })

        after(() => {
            Edit_Costdialog.clickCreatecostmenu()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            
        })
        afterEach(() => {
            cy.wait(500)
        })
        

    })
})
