///<reference types="cypress" />
import { Createincome } from "../../Page_model/Create_income/Add_income"
import { Add_income_Edit_dialog } from "../../Page_model/Create_income/Add_income_Edit_dialog_page"



const Add_income_Editdialog = new Add_income_Edit_dialog()
const createincome = new Createincome()


describe('Add income Editdialog Test', () => {

    beforeEach('', () => {
        cy.viewport(1920, 1080)

    })
    before('setup before test', () => {
        cy.viewport(1920, 1080)
       //Login
       Add_income_Editdialog.Login()

    })
    
    context('Add income Edit dialog', () => {

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
            //ASSERT
            createincome.validateAddincome_success('Reserved Portion','Share','Daily','Test Cypress','123,456.00','THB','123,456.00')
        })
        
        //ACT Null Item
        it('Null Item', () => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterItemclear()  
            Add_income_Editdialog.clickUpdatebutton()
            
            //Assert
            Add_income_Editdialog.validateFail_Item("'item' is required")
        })

        //ACT Null Amount
        it('Null Amount', () => {

            Add_income_Editdialog.enterItem('test')
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.clickUpdatebutton()
            //Assert
            Add_income_Editdialog.validateFail_Amount("'amount' is required")
        })   

        //ACT Amount input negative
        it('Amount input negative',() =>{
            Add_income_Editdialog.enterAmounttextbox('-20')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input charector
        it('Amount input charector',() => {
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('Fin')

            //Assert
            Add_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input symbol
        it('Amount input symbol',() => {
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('@#$%^')

            //Assert
            Add_income_Editdialog.validateFail_Amount("'amount' is not a valid number")
        })

        //ACT Amount input 0
        it('Amount input 0',() => {
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('0')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_Amount('0')
        })

        //ACT Amount input decimal
        it('Amount input decimal',() => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('0.1')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_Amount('0.1')
        })

        //ACT Amount input decimal 4 position
        it('Amount input decimal 4 position',() => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('0.1111')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_Amount('0.1111')
        })

        //ACT Null Currency 
        it('Null Currency',() => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterAmounttextboxclear()
            Add_income_Editdialog.enterAmounttextbox('123456')
            Add_income_Editdialog.enterCurrencytextboxclear()

            //Assert
            Add_income_Editdialog.validateFail_Currency("'currency' is required")    
        })

        //ACT Currency charector over 4
        it('Currency charector over 4',() => {
            Add_income_Editdialog.enterCurrencytextbox('First')

            //Assert
            Add_income_Editdialog.validateFail_Currency("'currency' cannot be longer than 4 characters")  
        })

        //ACT Null Amount_THB
        it('Null Amount_THB',() => {
            Add_income_Editdialog.enterCurrencytextboxclear()
            Add_income_Editdialog.enterCurrencytextbox('THB')
            Add_income_Editdialog.enterAmountthbtextboxclear()

            //Assert
            Add_income_Editdialog.validateFail_AmountThb("'amountThb' is required")  
        })

        //ACT Amount_THB input negative
        it('Amount_THB input negative',() => {
            Add_income_Editdialog.enterAmountthbtextbox('-20')

            //Assert
            Add_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input charector
        it('Amount_THB input charector',() => {
            Add_income_Editdialog.enterAmountthbtextboxclear()
            Add_income_Editdialog.enterAmountthbtextbox('cypress')

            //Assert
            Add_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input symbol
        it('Amount_THB input symbol',() => {
            Add_income_Editdialog.enterAmountthbtextboxclear()
            Add_income_Editdialog.enterAmountthbtextbox('@#$%^')

            //Assert
            Add_income_Editdialog.validateFail_AmountThb("'Amount (THB)' is not a valid number")  
        })

        //ACT Amount_THB input 0
        it('Amount_THB input 0',() => {
            Add_income_Editdialog.enterAmountthbtextboxclear()
            Add_income_Editdialog.enterAmountthbtextbox('0')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_AmountThb('0') 
        })

        //ACT Amount_THB input decimal
        it('Amount_THB input decimal',() => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterAmountthbtextboxclear()
            Add_income_Editdialog.enterAmountthbtextbox('0.1')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_AmountThb('0.1') 
        })

        //ACT Amount_THB input decimal 4 position
        it('Amount_THB input decimal',() => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterAmountthbtextboxclear()
            Add_income_Editdialog.enterAmountthbtextbox('0.1111')
            Add_income_Editdialog.clickUpdatebutton()

            //Assert
            Add_income_Editdialog.ValidateSuccess_AmountThb('0.1111')
        })

        //check Edit
        it('check Edit', () => {
            Add_income_Editdialog.clickEditbutton1()
            Add_income_Editdialog.enterCategory('Hiring cost') 
            Add_income_Editdialog.enterSubcategory('Hiring')  
            Add_income_Editdialog.enterType('Monthly') 
            Add_income_Editdialog.enterItemclear() 
            Add_income_Editdialog.enterItem('test')  
            Add_income_Editdialog.clickUpdatebutton()
            //Assert 
            Add_income_Editdialog.ValidateSuccess_Category('Hiring cost')
            Add_income_Editdialog.ValidateSuccess_Subcategory('Hiring')
            Add_income_Editdialog.ValidateSuccess_Type('Monthly')
            Add_income_Editdialog.ValidateSuccess_Item('test')

        })

        //check create
        it('check create', () => {
            Add_income_Editdialog.Login()

            //Assert 
            Add_income_Editdialog.validateSuccess_income('Income Manangement')
        })

        after(() => {

        })
        afterEach(() => {
            cy.wait(500)
        })
    })
})  