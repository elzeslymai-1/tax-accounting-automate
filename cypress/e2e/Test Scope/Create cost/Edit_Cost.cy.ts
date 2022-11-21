///<reference types="cypress" />
import {AddCost} from "../../Page_model/Create cost page/Add_cost_page"
import {EditCost } from "../../Page_model/Create cost page/Edit_Cost"

const Addcost = new AddCost()
const edit_cost = new EditCost()

describe('Edit Cost Test', () => {
    beforeEach('', () => {
        cy.viewport(1920, 1080)
        
    })

    before('setup before test', () => {
        //Login
        edit_cost.Login()
    })

    context('Edit Cost', () => {
        //ACT Add cost success 
        it('Add cost success', () => {
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
            //ASSERT
            Addcost.validateAddincome_success('Tech Cost','Platform','Daily','Test Cypress','123,456.00','THB','123,456.00')
            Addcost.validateSuccess('Create cost was successfully')
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
        })

        //ACT Null Category
        it('Null category', () => {
            edit_cost.Login()
            edit_cost.clickEdit_button()
            Addcost.enterItem('Test Cypress')
            Addcost.enterAmount('123456')
            Addcost.enterCurrency('THB')
            Addcost.enterAmount_THB('123456')
            Addcost.clickAddbutton()
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
        
            ///ASSERT
            Addcost.validateCategory("'category' is required")
        })

        
        //ACT Null Subcategory
        it('Null Subcategory', () => {
            Addcost.enterCategory('Tech Cost')
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateSub_category("'subCategory' is required")
        })

        //ACT3 Null Type
        it('Null Type', () => {
            Addcost.enterSubcategory('Platform')
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateType("'type' is required")
        })


        //ACT Null Item
        it('Null Item', () => {
            Addcost.enterType('Daily')
            Addcost.clearItem()
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateItem("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {
            Addcost.enterItem('Test cypress')
            Addcost.clearAmount()
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateAmount("'amount' is required")
        })

        //ACT Amount input negative
        it('Amount input negative', () => {
            Addcost.clearAmount()
            Addcost.enterAmount('-123456')
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateAmount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector', () => {
            Addcost.clearAmount()
            Addcost.enterAmount('kkkkkk')
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateAmount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol', () => {
            Addcost.clearAmount()
            Addcost.enterAmount('@@@@@@')
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateAmount("'amount' is not a valid number")
        })

        //ACT Create amount input 0
        it('Creat amount input 0', () => {
            Addcost.clearAmount()
            Addcost.enterAmount('0')
            Addcost.clickAddbutton()
            

            //ASSERT
            Addcost.ValidateAmount('0')
        })

        //ACT Create amount input decimal
        it('Creat amount input decimal', () => {
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
            Addcost.clearAmount()
            Addcost.enterAmount('0.111')
            Addcost.clickAddbutton()
           

            //ASSERT
            Addcost.ValidateAmount('0.111')
        })

        //ACT Create amount input decimal 4 position
        it('Creat amount input decimal 4 position', () => {
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
            Addcost.clearAmount()
            Addcost.enterAmount('0.1111')
            Addcost.clickAddbutton()

            //ASSERT
            Addcost.ValidateAmount('0.1111')
        })

         //ACT Null Currency
         it('Null Currency', () => {
            Addcost.clearCurrency()
            Addcost.clickAddbutton()

            ///ASSERT
            Addcost.validateFailCurrency("'currency' is required")
        })

        //Act Currency over 4 charector
        it('Currency over 4 charector', () => {    
            Addcost.enterCurrency('THBath')
            Addcost.clickAddbutton()
            
            ///ASSERT
            Addcost.validateFailCurrency("'currency' cannot be longer than 4 characters")
        })

         //ACT Null Amount_THB
         it('Null Amount_THB', () => {
            Addcost.clearCurrency()
            Addcost.enterCurrency('THB')
            Addcost.clearAmount_THB()
            Addcost.clickAddbutton()
            ///ASSERT
            Addcost.validateAmountthb("'amountThb' is required")
        })

        //ACT Amount_THB negative
        it('Amount_THB negative', () => {
            Addcost.enterAmount_THB('-123456')
            Addcost.clickAddbutton()
            ///ASSERT
            Addcost.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector', () => {
            Addcost.clearAmount_THB()
            Addcost.enterAmount_THB('kkkkkk')
            Addcost.clickAddbutton()
            ///ASSERT
            Addcost.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol', () => {
            Addcost.clearAmount_THB()
            Addcost.enterAmount_THB('@@@@@@')
            Addcost.clickAddbutton()
            ///ASSERT
            Addcost.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Create amount_THB input 0
        it('Creat amount_THB input 0', () => {
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
            Addcost.clearAmount_THB()
            Addcost.enterAmount_THB('0')
            Addcost.clickAddbutton()

            //ASSERT
            Addcost.ValidateAmountThb('0')
        })

        //ACT Create amount_THB input decimal
        it('Creat amount_THB input decimal', () => {
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
            Addcost.clearAmount_THB()
            Addcost.enterAmount_THB('0.111')
            Addcost.clickAddbutton()

            //ASSERT
            Addcost.ValidateAmountThb('0.111')
        })

        // //ACT Create amount_THB input decimal 4 position
        it('Creat amount_THB input decimal', () => {
            Addcost.clickDelete()
            Addcost.clickConfirmdelete()
            Addcost.clearAmount_THB()
            Addcost.enterAmount_THB('0.1111')
            Addcost.clickAddbutton()

            //ASSERT
            Addcost.ValidateAmountThb('0.1111')
        })

        //ACT Create cost feature
        it('Creat cost feature', () => {
            edit_cost.Login()
            Addcost.clickAdd()
            cy.get('.ant-picker-input > input').click();
            cy.get('.ant-picker-header-super-next-btn').click();
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
            //ASSERT
            Addcost.validateSuccess('Create cost was successfully')
        })

        after(() => {
            for (var i = 0; i < 2; i++) {
            edit_cost.clickCreatecostmenu()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            }
        })
        afterEach(() => {
            cy.wait(500)
        })

    })
})
