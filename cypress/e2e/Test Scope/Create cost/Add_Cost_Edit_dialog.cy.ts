///<reference types="cypress" />
import { AddCost } from "../../Page_model/Create cost page/Add_cost_page"
import { Add_Cost_Edit_dialog } from "../../Page_model/Create cost page/Add_Cost_Edit_dialog_page"


const Add_Costdialog = new Add_Cost_Edit_dialog()
const Addcost = new AddCost()

describe('Add cost Edit dialog Test', () => {

    beforeEach('', () => {
        cy.viewport(1920, 1080)


    })
    before('setup before test', () => {
        cy.viewport(1920, 1080)

        //Login
        Add_Costdialog.Login()

    })

    context('Add Cost Editdialog', () => {

        //Add Create Cost
        it('Create Cost', () => {

            //Enter income Detail
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
            //Assert
            Addcost.validateAddincome_success('Tech Cost', 'Platform', 'Daily', 'Test Cypress', '123,456.00', 'THB', '123,456.00')
        })

        //ACT Null Item
        it('Null Item', () => {
            cy.wait(500)
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearItem()
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.validateFail_Item("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {
            Add_Costdialog.enterItem('test')
            Add_Costdialog.clearAmount()
            Add_Costdialog.clickUpdatebutton()
            //Assert
            Add_Costdialog.validateFail_Amount("'amount' is required")
        })

        //ACT Amount input negative
        it('Amount input negative', () => {
            Add_Costdialog.enterAmount('-20')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector', () => {
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('Fin')

            //Assert
            Add_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol', () => {
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('@#$%^')

            Add_Costdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input 0
        it('Amount input 0', () => {
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('0')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_Amount('0')

        })

        //ACT Amount input decimal
        it('Amount input decimal', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('0.1')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_Amount('0.1')
        })

        //ACT Amount input decimal 4 position
        it('Amount input decimal 4 position', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('0.1111')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_Amount('0.1111')
        })

        //ACT Null Currency 
        it('Null Currency', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearAmount()
            Add_Costdialog.enterAmount('123456')
            Add_Costdialog.clearcurrency()

            //Assert
            Add_Costdialog.validateFail_Currency("'currency' is required")
        })

        //ACT Currency charector over 4
        it('Currency charector over 4', () => {
            Add_Costdialog.enterCurrency('First')

            //Assert
            Add_Costdialog.validateFail_Currency("'currency' cannot be longer than 4 characters")
        })

        //ACT Null Amount_THB
        it('Null Amount_THB', () => {
            Add_Costdialog.clearcurrency()
            Add_Costdialog.enterCurrency('THB')
            Add_Costdialog.clearamountthb()

            //Assert
            Add_Costdialog.validateFail_AmountThb("'amountThb' is required")
        })

        //ACT Amount_THB input negative
        it('Amount_THB input negative', () => {
            Add_Costdialog.enterAmountthb('-20')

            //Assert
            Add_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector', () => {
            Add_Costdialog.clearamountthb()
            Add_Costdialog.enterAmountthb('cypress')

            //Assert
            Add_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol', () => {
            Add_Costdialog.clearamountthb()
            Add_Costdialog.enterAmountthb('@#$%^')

            //Assert
            Add_Costdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input 0
        it('Amount_THB input 0', () => {
            Add_Costdialog.clearamountthb()
            Add_Costdialog.enterAmountthb('0')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_AmountThb('0')
        })

        //ACT Amount_THB input decimal
        it('Amount_THB input decimal', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearamountthb()
            Add_Costdialog.enterAmountthb('0.1')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_AmountThb('0.1')
        })

        //ACT Amount_THB input decimal 4 position
        it('Amount_THB input decimal', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.clearamountthb()
            Add_Costdialog.enterAmountthb('0.1111')
            Add_Costdialog.clickUpdatebutton()

            //Assert
            Add_Costdialog.ValidateSuccess_AmountThb('0.1111')
        })

        //check edit
        it('check edit', () => {
            Add_Costdialog.clickEditbutton1()
            Add_Costdialog.enterCategory('Man Cost')
            Add_Costdialog.enterSubcategory('Project Owner')
            Add_Costdialog.enterType('Monthly')
            Add_Costdialog.clearItem()
            Add_Costdialog.enterItem('test')
            Add_Costdialog.clickUpdatebutton()
            //Assert 
            Add_Costdialog.ValidateSuccess_Category('Man Cost')
            Add_Costdialog.ValidateSuccess_Subcategory('Project Owner')
            Add_Costdialog.ValidateSuccess_Type('Monthly')
            Add_Costdialog.ValidateSuccess_Item('test')
        })

        //check create
        it('check enter Item', () => {
            Add_Costdialog.Login()

            //Assert 
            Add_Costdialog.validateSuccess_income('Cost Manangement')
        })

        after(() => {

        })
        afterEach(() => {
            cy.wait(500)
        })

    })
})