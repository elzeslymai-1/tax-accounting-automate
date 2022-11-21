///<reference types="cypress" />
import { createIncrementalCompilerHost } from "typescript"
import {AddCost} from "../../Page_model/Create cost page/Add_cost_page"

const Addcost = new AddCost()

describe('Creat Cost Test', () => {
    beforeEach('', () => {
        cy.viewport(1920, 1080)
        
    })

    before('setup before test', () => {
        cy.viewport(1920, 1080)
        //Login
        Addcost.Login()
    })

    context('Create Cost ', () => {
        //ACT
        it('Check => Category Type Techcost', () => {
            Addcost.clickAdd()
            //click Category type dropdown
            Addcost.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatecategory_type_filter_element('Techcost')
        })

        //ACT
        it('Check => Category Type Mancost', () => {
            //click Category type dropdown
            Addcost.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatecategory_type_filter_element('Mancost')
        })

        //ACT
        it('Check => Category Type Duediligencecost', () => {
            //click Category type dropdown
            Addcost.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatecategory_type_filter_element('Duediligencecost')
        })

        //ACT
        it('Check => Category Type Consultingcost', () => {
            //click Category type dropdown
            Addcost.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatecategory_type_filter_element('Consultingcost')
        })

        //ACT
        it('Check => Category Type Externalaudit', () => {
            //click Category type dropdown
            Addcost.clickCategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatecategory_type_filter_element('Externalaudit')
        })

        //ACT
        it('Check => Subcategory Type Plateform', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('Plateform')
        })

        //ACT
        it('Check => Subcategory Type SmartContract', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('SmartContract')
        })

        //ACT
        it('Check => Subcategory Type ProjectOwner', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('ProjectOwner')
        })

        //ACT
        it('Check => Subcategory Type Programmer', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('Programmer')
        })

        //ACT
        it('Check => Subcategory Type UXUIDesign', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('UXUIDesign')
        })

        //ACT
        it('Check => Subcategory Type Tester', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('Tester')
        })

        //ACT
        it('Check => Subcategory Type Operation', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('Operation')
        })

        //ACT
        it('Check => Subcategory Type Tokenomist', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('Tokenomist')
        })

        //ACT
        it('Check => Subcategory Type SmartContractAudit', () => {
            //click Subcategory type dropdown
            Addcost.clickSubcategory_type_dropdown()
            cy.wait(500)
            //assert
            Addcost.validateSubcategory_type_filter_element('SmartContractAudit')
        })

        //ACT
        it('Check => Type Onetime', () => {
            //click type dropdown
            Addcost.clicktype_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatetype_filter_element('Onetime')
        })

        //ACT
        it('Check => Type Daily', () => {
            //click type dropdown
            Addcost.clicktype_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatetype_filter_element('Daily')
        })

        //ACT
        it('Check => Type Monthly', () => {
            //click type dropdown
            Addcost.clicktype_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatetype_filter_element('Monthly')
        })

        //ACT
        it('Check => Type Annually', () => {
            //click type dropdown
            Addcost.clicktype_dropdown()
            cy.wait(500)
            //assert
            Addcost.validatetype_filter_element('Annually')
        })

        //ACT Null Category
        it('Null category', () => {
            Addcost.enterItem('Test Cypress')
            Addcost.enterAmount('123456')
            Addcost.enterCurrency('THB')
            Addcost.enterAmount_THB('123456')
            Addcost.clickAddbutton()
            ///ASSERT
            Addcost.validateCategory("'category' is required")
        })

        //ACT Null Subcategory
        it('Null Subcategory', () => {
            //clear data 
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

        //ACT Null Month
        it('Null Month', () => {
            Addcost.clickSubmit()
            ///ASSERT
            Addcost.validateFail1('Please select cost date')
        })

        //ACT Create cost feature
        it('Creat cost feature', () => {
            Addcost.Login()
            Addcost.clickAdd()
            Addcost.clicknextyear()
            Addcost.enterMonth('Jan')
            Addcost.enterCategory('Tech Cost')
            Addcost.enterSubcategory('Platform')
            Addcost.enterType('Daily')
            Addcost.enterItem('Test Cypress')
            Addcost.enterAmount('123456')
            Addcost.enterCurrency('THB')
            Addcost.enterAmount_THB('123456')
            Addcost.clickAddbutton1()
            Addcost.clickSubmit()
            //ASSERT
            Addcost.validateSuccess('Create cost was successfully')
        })

        //ACT Add cost success 
        it('Add cost success', () => {
            Addcost.Login()
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            Addcost.clickAdd()
            Addcost.enterMonth('Jan')
            Addcost.enterCategory('Tech Cost')
            Addcost.enterSubcategory('Platform')
            Addcost.enterType('Daily')
            Addcost.enterItem('Test Cypress1')
            Addcost.enterAmount('111')
            Addcost.enterCurrency('THB')
            Addcost.enterAmount_THB('111')
            Addcost.clickAddbutton1()
            cy.wait(500)
            Addcost.clickSubmit()
            //ASSERT
            Addcost.validateAddincome_success('Tech Cost','Platform','Daily','Test Cypress','111.00','THB','111.00')
            Addcost.validateSuccess('Create cost was successfully')
        })

        //ACT copy cost 
        it('copy cost', () => {
            Addcost.Login()
            Addcost.clickAdd()
            Addcost.enterMonth('Jan')
            cy.wait(1000)
            Addcost.enterMonth_copy('Jan')
            Addcost.clicksubmitcopy()
            //ASSERT
            Addcost.validateAddincome_success('Tech Cost','Platform','Daily','Test Cypress','111.00','THB','111.00')

            
        })
        //ACT copy cost submit 
        it('copy cost submit', () => {
            Addcost.clickSubmit()
            //ASSERT
            Addcost.validateSuccess('Create cost was successfully')
        })

        //ACT check data copy cost 
        it('check data copy cost', () => {
            Addcost.Login()
            Addcost.clickview1()
            //ASSERT
            Addcost.validatetext_category('Platform : Test Cypress1')
            Addcost.validatetext_amountthb1('111.00')
            Addcost.validatetext_amountthb2('222.00')
        })

        //ACT
        it('Click => 10 Item Per Page ', () => {
            //login
            Addcost.Login()

            //enter item
            Addcost.selectItem_per_page_button('10') 

            //Assert
            cy.wait(500)
            Addcost.validateItem_per_page_button(10)
        })

        //ACT
        it('Click => 15 Item Per Page ', () => {
            //login
            Addcost.Login()

            //enter item
            Addcost.selectItem_per_page_button('15') 

            //Assert
            cy.wait(500)
            Addcost.validateItem_per_page_button(15)
        })

        //ACT
        it('Click => 20 Item Per Page ', () => {
            //login
            Addcost.Login()

            //enter item
            Addcost.selectItem_per_page_button('20') 

            //Assert
            cy.wait(500)
            Addcost.validateItem_per_page_button(20)
        })

        //ACT
        it('Click => Next Page', () => {
            //login
            Addcost.Login()

            //click next page
            Addcost.clickNext_page_button()

            //Assert
            cy.wait(500)
            Addcost.validateNext_page_button('page 2')
        })

        //ACT
        it('Click => Previous Page', () => {
            //login
            Addcost.Login()
            //click next page
            Addcost.clickNext_page_button()
            //click previous page
            Addcost.clickPrevious_page_button()

            //Assert
            cy.wait(500)
            Addcost.validatePrevious_page_button('page 1')
        })

        afterEach(() => {
            cy.wait(500)
        })

    })
})



