///<reference types="cypress" />
import { createIncrementalCompilerHost } from "typescript"
import { Createincome } from "../../Page_model/Create_income/Add_income"
import {Edit_income} from "../../Page_model/Create_income/Edit_income"

const createincome = new Createincome()
const Editincome = new Edit_income()

describe('Edit income Test', () => {
    beforeEach('', () => {
        cy.viewport(1920, 1080)
        
    })

    before('setup before test', () => {
        cy.viewport(1920, 1080)
        //Login
        createincome.Login()
    })

    context('Edit Create income', () => {
        //ACT Add income success 
        it('Add income success', () => {
            createincome.clickAdd()
            createincome.enterMonth('Jan')
            createincome.enterCategory('Reserved Portion')
            createincome.enterSubcategory('Share')
            createincome.enterType('Daily')
            createincome.enterItem('Test Cypress')
            createincome.enterAmount('123456')
            createincome.enterCurrency('THB')
            createincome.enterAmount_THB('123456')
            createincome.clickAddbutton()
            createincome.clickSubmit()
            //ASSERT
            createincome.validateAddincome_success('Reserved Portion','Share','Daily','Test Cypress','123,456.00','THB','123,456.00')
            createincome.validateSuccess('Create income was successfully')
            createincome.clickDelete()
            createincome.clickConfirmdelete()
        })

        //ACT Null Category
        it('Null category', () => {
            createincome.Login()
            Editincome.clickEdit_button()
            createincome.enterItem('Test Cypress')
            createincome.enterAmount('123456')
            createincome.enterCurrency('THB')
            createincome.enterAmount_THB('123456')
            createincome.clickAddbutton()
            createincome.clickDelete()
            createincome.clickConfirmdelete()
        
            ///ASSERT
            createincome.validateCategory("'category' is required")
        })

        
        //ACT Null Subcategory
        it('Null Subcategory', () => {
            createincome.enterCategory('Reserved Portion')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateSub_category("'subCategory' is required")
        })

        //ACT3 Null Type
        it('Null Type', () => {
            createincome.enterSubcategory('Share')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateType("'type' is required")
        })


        //ACT Null Item
        it('Null Item', () => {
            createincome.enterType('Daily')
            createincome.clearItem()
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateItem("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {
            createincome.enterItem('Test cypress')
            createincome.clearAmount()
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateAmount("'amount' is required")
        })

        //ACT Amount input negative
        it('Amount input negative', () => {
            createincome.clearAmount()
            createincome.enterAmount('-123456')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateAmount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector', () => {
            createincome.clearAmount()
            createincome.enterAmount('kkkkkk')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateAmount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol', () => {
            createincome.clearAmount()
            createincome.enterAmount('@@@@@@')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateAmount("'amount' is not a valid number")
        })

        //ACT Create amount input 0
        it('Creat amount input 0', () => {
            createincome.clearAmount()
            createincome.enterAmount('0')
            createincome.clickAddbutton()
            

            //ASSERT
            createincome.ValidateAmount('0')
        })

        //ACT Create amount input decimal
        it('Creat amount input decimal', () => {
            createincome.clickDelete()
            createincome.clickConfirmdelete()
            createincome.clearAmount()
            createincome.enterAmount('0.111')
            createincome.clickAddbutton()
           

            //ASSERT
            createincome.ValidateAmount('0.111')
        })

        //ACT Create amount input decimal 4 position
        it('Creat amount input decimal 4 position', () => {
            createincome.clickDelete()
            createincome.clickConfirmdelete()
            createincome.clearAmount()
            createincome.enterAmount('0.1111')
            createincome.clickAddbutton()

            //ASSERT
            createincome.ValidateAmount('0.1111')
        })

         //ACT Null Currency
         it('Null Currency', () => {
            createincome.clearCurrency()
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateFailCurrency("'currency' is required")
        })

        //Act Currency over 4 charector
        it('Currency over 4 charector', () => {    
            createincome.enterCurrency('THBath')
            createincome.clickAddbutton()
            
            ///ASSERT
            createincome.validateFailCurrency("'currency' cannot be longer than 4 characters")
        })

         //ACT Null Amount_THB
         it('Null Amount_THB', () => {
            createincome.clearCurrency()
            createincome.enterCurrency('THB')
            createincome.clearAmount_THB()
            createincome.clickAddbutton()
            ///ASSERT
            createincome.validateAmountthb("'amountThb' is required")
        })

        //ACT Amount_THB negative
        it('Amount_THB negative', () => {
            createincome.enterAmount_THB('-123456')
            createincome.clickAddbutton()
            ///ASSERT
            createincome.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector', () => {
            createincome.clearAmount_THB()
            createincome.enterAmount_THB('kkkkkk')
            createincome.clickAddbutton()
            ///ASSERT
            createincome.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol', () => {
            createincome.clearAmount_THB()
            createincome.enterAmount_THB('@@@@@@')
            createincome.clickAddbutton()
            ///ASSERT
            createincome.validateAmountthb("'Amount (THB)' is not a valid number")
        })

        //ACT Create amount_THB input 0
        it('Creat amount_THB input 0', () => {
            createincome.clickDelete()
            createincome.clickConfirmdelete()
            createincome.clearAmount_THB()
            createincome.enterAmount_THB('0')
            createincome.clickAddbutton()

            //ASSERT
            createincome.ValidateAmountThb('0')
        })

        //ACT Create amount_THB input decimal
        it('Creat amount_THB input decimal', () => {
            createincome.clickDelete()
            createincome.clickConfirmdelete()
            createincome.clearAmount_THB()
            createincome.enterAmount_THB('0.111')
            createincome.clickAddbutton()

            //ASSERT
            createincome.ValidateAmountThb('0.111')
        })

        // //ACT Create amount_THB input decimal 4 position
        it('Creat amount_THB input decimal', () => {
            createincome.clickDelete()
            createincome.clickConfirmdelete()
            createincome.clearAmount_THB()
            createincome.enterAmount_THB('0.1111')
            createincome.clickAddbutton()

            //ASSERT
            createincome.ValidateAmountThb('0.1111')
        })

        //ACT Create income feature
        it('Creat income feature', () => {
            createincome.Login()
            createincome.clickAdd()
            cy.get('.ant-picker-input > input').click();
            cy.get('.ant-picker-header-super-next-btn').click();
            createincome.enterMonth('Jan')
            createincome.enterCategory('Reserved Portion')
            createincome.enterSubcategory('Share')
            createincome.enterType('Daily')
            createincome.enterItem('Test Cypress')
            createincome.enterAmount('123456')
            createincome.enterCurrency('THB')
            createincome.enterAmount_THB('123456')
            createincome.clickAddbutton()
            createincome.clickSubmit()
            //ASSERT
            createincome.validateSuccess('Create income was successfully')
        })

        after(() => {
            for (var i = 0; i < 2; i++) {
            createincome.clickCreateincomemenu()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            }
        })
        afterEach(() => {
            cy.wait(500)
        })

    })
})



