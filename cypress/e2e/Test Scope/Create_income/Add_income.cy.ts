///<reference types="cypress" />
import { createIncrementalCompilerHost } from "typescript"
import { Createincome } from "../../Page_model/Create_income/Add_income"

const createincome = new Createincome()


describe('Creat income Test', () => {
    beforeEach('setup before test', () => {
        cy.viewport(1920, 1080)
        
    })

    before('', () => {
        //Login
        createincome.Login()
    })

    context('Add Create income', () => {
        //ACT
        it('Check => Category Type HiringCost', () => {
            createincome.clickAdd()
            //click Category type dropdown
            createincome.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validatecategory_type_filter_element('HiringCost')
        })

        //ACT
        it('Check => Category Type Dividend', () => {
            //click Category type dropdown
            createincome.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validatecategory_type_filter_element('Dividend')
        })

        //ACT
        it('Check => Category Type Share', () => {
            //click Category type dropdown
            createincome.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validatecategory_type_filter_element('Share')
        })

        //ACT
        it('Check => Category Type TransactionFee', () => {
            //click Category type dropdown
            createincome.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validatecategory_type_filter_element('TransactionFee')
        })

        //ACT
        it('Check => Subcategory Type Plateform', () => {
            //click Subcategory type dropdown
            createincome.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validateSubcategory_type_filter_element('Plateform')
        })

        //ACT
        it('Check => Subcategory Type ProjectOwnerCustomer', () => {
            //click Subcategory type dropdown
            createincome.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validateSubcategory_type_filter_element('ProjectOwnerCustomer')
        })

        //ACT
        it('Check => Subcategory Type ReservedPortion', () => {
            //click Subcategory type dropdown
            createincome.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validateSubcategory_type_filter_element('ReservedPortion')
        })

        //ACT
        it('Check => Subcategory Type Others', () => {
            //click Subcategory type dropdown
            createincome.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            createincome.validateSubcategory_type_filter_element('Others')
        })

        //ACT
        it('Check => Type Onetime', () => {
            //click type dropdown
            createincome.clicktype_dropdown()
            cy.wait(500)
            //assert
            createincome.validatetype_filter_element('Onetime')
        })

        //ACT
        it('Check => Type Daily', () => {
            //click type dropdown
            createincome.clicktype_dropdown()
            cy.wait(500)
            //assert
            createincome.validatetype_filter_element('Daily')
        })

        //ACT
        it('Check => Type Monthly', () => {
            //click type dropdown
            createincome.clicktype_dropdown()
            cy.wait(500)
            //assert
            createincome.validatetype_filter_element('Monthly')
        })

        //ACT
        it('Check => Type Annually', () => {
            //click type dropdown
            createincome.clicktype_dropdown()
            cy.wait(500)
            //assert
            createincome.validatetype_filter_element('Annually')
        })

        //ACT Null Category
        it('Null category', () => {
            createincome.enterItem('Test Cypress')
            createincome.enterAmount('123456')
            createincome.enterCurrency('THB')
            createincome.enterAmount_THB('123456')
            createincome.clickAddbutton()
            ///ASSERT
            createincome.validateCategory("'category' is required")
        })

        //ACT Null Subcategory
        it('Null Subcategory', () => {
            //clear data 
            createincome.enterCategory('Hiring Cost')
            createincome.clickAddbutton()

            ///ASSERT
            createincome.validateSub_category("'subCategory' is required")
        })

        //ACT3 Null Type
        it('Null Type', () => {
            createincome.enterSubcategory('Platform')
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

        //ACT Null Month
        it('Null Month', () => {
            createincome.clickSubmit()
            ///ASSERT
            createincome.validateFail1('Please select income date')
        })

        //ACT Create income feature
        it('Creat income feature', () => {
            createincome.Login()
            createincome.clickAdd()
            cy.get('.ant-picker-input > input').click();
            cy.get('.ant-picker-header-super-next-btn').click();
            createincome.enterMonth('Jan')
            createincome.enterCategory('Hiring Cost')
            createincome.enterSubcategory('Platform')
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

        //ACT Add income success 
        it('Add income success', () => {
            createincome.Login()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            createincome.clickAdd()
            createincome.enterMonth('Jan')
            createincome.enterCategory('Hiring Cost')
            createincome.enterSubcategory('Platform')
            createincome.enterType('Daily')
            createincome.enterItem('Test Cypress')
            createincome.enterAmount('111')
            createincome.enterCurrency('THB')
            createincome.enterAmount_THB('111')
            createincome.clickAddbutton()
            createincome.clickSubmit()
            //ASSERT
            createincome.validateAddincome_success('Hiring Cost','Platform','Daily','Test Cypress','111.00','THB','111.00')
            createincome.validateSuccess('Create income was successfully')
        })

        //ACT
        it('Click => 10 Item Per Page ', () => {
            //login
            createincome.Login()

            //enter item
            createincome.selectItem_per_page_button('10') 

            //Assert
            cy.wait(500)
            createincome.validateItem_per_page_button(10)
        })

        //ACT
        it('Click => 15 Item Per Page ', () => {
            //login
            createincome.Login()

            //enter item
            createincome.selectItem_per_page_button('15') 

            //Assert
            cy.wait(1000)
            createincome.validateItem_per_page_button(15)
        })

        //ACT
        it('Click => 20 Item Per Page ', () => {
            //login
            createincome.Login()

            //enter item
            createincome.selectItem_per_page_button('20') 

            //Assert
            cy.wait(700)
            createincome.validateItem_per_page_button(20)
        })

        //ACT
        it('Click => Next Page', () => {
            //login
            createincome.Login()

            //click next page
            createincome.clickNext_page_button()

            //Assert
            cy.wait(500)
            createincome.validateNext_page_button('page 2')
        })

        //ACT
        it('Click => Previous Page', () => {
            //login
            createincome.Login()
            //click next page
            createincome.clickNext_page_button()
            //click previous page
            createincome.clickPrevious_page_button()

            //Assert
            cy.wait(500)
            createincome.validatePrevious_page_button('page 1')
        })

        afterEach(() => {
            cy.wait(500)
        })

    })
})



