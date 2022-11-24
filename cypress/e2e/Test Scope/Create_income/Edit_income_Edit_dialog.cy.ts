///<reference types="cypress" />
import { Createincome } from "../../Page_model/Create_income/Add_income"
import { Edit_income_Edit_dialog } from "../../Page_model/Create_income/Edit_income_Edit_dialog_page"


const Edit_income_Editdialog = new Edit_income_Edit_dialog()
const createincome = new Createincome()

describe('Edit income Edit dialog Test', () => {

    beforeEach('setup before test', () => {
        cy.viewport(1920, 1080)

    })
    before('setup before test', () => {
        cy.viewport(1920, 1080)
       //Login
       Edit_income_Editdialog.Login()

    })

    context('Edit income Edit dialog', () => {

        //Add Create income
        it('Add Create income', () => {
            
            //Enter income Detail
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
            //Assert
            createincome.validateAddincome_success('Reserved Portion','Share','Daily','Test Cypress','123,456.00','THB','123,456.00')
            
        })

        //ACT Null Item
        it('Null Item', () => {
            Edit_income_Editdialog.Login()
            cy.wait(500)
            Edit_income_Editdialog.clickEdit_button_income()
            cy.wait(1000)
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterItemclear()  
            Edit_income_Editdialog.clickUpdatebutton()
            
            //Assert
            Edit_income_Editdialog.validateFail_Item("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {
            Edit_income_Editdialog.enterItem('test') 
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.clickUpdatebutton()
            //Assert
            Edit_income_Editdialog.validateFail_Amount("'amount' is required")
        })   
        
        //ACT Amount input negative
        it('Amount input negative',() =>{
            Edit_income_Editdialog.enterAmounttextbox('-20')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector',() => {
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('Fin')

            //Assert
            Edit_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol',() => {
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('@#$%^')

            //Assert
            Edit_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input 0
        it('Amount input 0',() => {
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('0')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_Amount('0')
            
        })

        //ACT Amount input decimal
        it('Amount input decimal',() => {
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('0.1')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_Amount('0.1')
        })

        //ACT Amount input decimal 4 position
        it('Amount input decimal 4 position',() => {
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('0.1111')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_Amount('0.1111')
        })

        //ACT Null Currency 
        it('Null Currency',() => {
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterAmounttextboxclear()
            Edit_income_Editdialog.enterAmounttextbox('123456')
            Edit_income_Editdialog.enterCurrencytextboxclear()

            //Assert
            Edit_income_Editdialog.validateFail_Currency("'currency' is required")    
        })

        //ACT Currency charector over 4
        it('Currency charector over 4',() => {
            Edit_income_Editdialog.enterCurrencytextbox('First')

            //Assert
            Edit_income_Editdialog.validateFail_Currency("'currency' cannot be longer than 4 characters")  
        })

        //ACT Null Amount_THB
        it('Null Amount_THB',() => {
            Edit_income_Editdialog.enterCurrencytextboxclear()
            Edit_income_Editdialog.enterCurrencytextbox('THB')
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            
            //Assert
            Edit_income_Editdialog.validateFail_AmountThb("'amountThb' is required")  
        })

        //ACT Amount_THB input negative
        it('Amount_THB input negative',() => {
            Edit_income_Editdialog.enterAmountthbtextbox('-20')

            //Assert
            Edit_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector',() => {
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            Edit_income_Editdialog.enterAmountthbtextbox('cypress')

            //Assert
            Edit_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol',() => {
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            Edit_income_Editdialog.enterAmountthbtextbox('@#$%^')

            //Assert
            Edit_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input 0
        it('Amount_THB input 0',() => {
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            Edit_income_Editdialog.enterAmountthbtextbox('0')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_AmountThb('0') 
        })

        //ACT Amount_THB input decimal
        it('Amount_THB input decimal',() => {
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            Edit_income_Editdialog.enterAmountthbtextbox('0.1')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_AmountThb('0.1') 
        })

        //ACT Amount_THB input decimal 4 position
        it('Amount_THB input decimal',() => {
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterAmountthbtextboxclear()
            Edit_income_Editdialog.enterAmountthbtextbox('0.1111')
            Edit_income_Editdialog.clickUpdatebutton()

            //Assert
            Edit_income_Editdialog.ValidateSuccess_AmountThb('0.1111')
        })

        //check Edit
        it('check Edit', () => {
            Edit_income_Editdialog.clickEdit_button_income()
            Edit_income_Editdialog.clickEditbutton1()
            Edit_income_Editdialog.enterCategory('Hiring cost') 
            Edit_income_Editdialog.enterSubcategory('Hiring')  
            Edit_income_Editdialog.enterType('Monthly') 
            Edit_income_Editdialog.enterItemclear() 
            Edit_income_Editdialog.enterItem('test')  
            Edit_income_Editdialog.clickUpdatebutton()
            //Assert 
            Edit_income_Editdialog.ValidateSuccess_Category('Hiring cost')
            Edit_income_Editdialog.ValidateSuccess_Subcategory('Hiring')
            Edit_income_Editdialog.ValidateSuccess_Type('Monthly')
            Edit_income_Editdialog.ValidateSuccess_Item('test')
            
        })

        //check create
        it('check create', () => {
            Edit_income_Editdialog.Login()
            
            //Assert 
            Edit_income_Editdialog.validateSuccess_income('Income Manangement')
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
