import { LoginPage } from "../Login page/Login_page"
const loginpage = new LoginPage()
//button
let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=cost-management]'
let Edit_button = '.p-10 > :nth-child(4) > :nth-child(1)'
let Edit_button1 =':nth-child(1) > :nth-child(8) > .py-0 > .ant-image > .ant-image-img'
let Update_button = '#control-hooks2 > :nth-child(1) > .flex > .ant-btn > span'

// enter
let item_textbox = '#control-hooks2_item'
let Amount_textbox = '#control-hooks2_amount'
let Currency_textbox = '#control-hooks2_currency'
let Amount_THB = '#control-hooks2_amountThb'
let category_textbox = '#control-hooks2 > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let subcategory_textbox ='#control-hooks2 > :nth-child(1) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let type_textbox ='#control-hooks2 > :nth-child(1) > :nth-child(3) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'

//validate
let validateFail_item='.ant-show-help-item-appear'
let validateFail_Amount='#control-hooks2_amount_help > .ant-form-item-explain-error'
let validateFail_Currency='#control-hooks2_currency_help > .ant-form-item-explain-error'
let validateFail_Amountthb='#control-hooks2_amountThb_help > .ant-form-item-explain-error'
let validate_cate='tbody > :nth-child(1) > :nth-child(1) > div'
let validate_subcat='tbody > :nth-child(1) > :nth-child(2) > div'
let validate_type='tbody > :nth-child(1) > :nth-child(3) > div'
let validate_item='tbody > :nth-child(1) > :nth-child(4) > div'
let Validate_Amount = 'tbody > :nth-child(1) > :nth-child(5) > div'
let Validate_AmountThb ='tbody > :nth-child(1) > :nth-child(7) > div'
let validatesuccess_income='.px-0 > .justify-between > :nth-child(1)'

export class Add_Cost_Edit_dialog {

    
    
    Login(){
        loginpage.url('https://dev.tax-accounting.finstable.co.th/login')
        loginpage.enterUsername('champ_psu@outlook.co.th')
        loginpage.enterPassword('11111111')
        loginpage.clickLogin()

        this.clickSelectproject()
        //select Create income menu
        this.clickCreatecostmenu()
            cy.wait(500)
    }
    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreatecostmenu() {
        cy.get(createincomeMenu_button).click()
    }
    clickEdit_button(){
        cy.get(Edit_button).click()   
    }
    clickEditbutton1(){
        cy.get(Edit_button1).click()
    }
    clickUpdatebutton() {
        cy.get(Update_button).click()
    }
    enterItem(item: string) {
        cy.get(item_textbox).type(item,{delay:0})
    }

    clearItem() {
        cy.get(item_textbox).clear()
    }

    enterAmount(textbox: string) {
        cy.get(Amount_textbox).type(textbox,{delay:0})
    }

    clearAmount() {
        cy.get(Amount_textbox).clear()
    }

    enterCurrency(currency: string) {
        cy.get(Currency_textbox).type(currency,{delay:0})
    }

    clearcurrency() {
        cy.get(Currency_textbox).clear()
    }

    enterAmountthb(Amountthb: string) {
        cy.get(Amount_THB).type(Amountthb,{delay:0})
    }

    clearamountthb() {
        cy.get(Amount_THB).clear()
    }

    enterCategory(category : string) {
        cy.get(category_textbox).click()
        cy.wait(500)
        cy.get('[title="'+category+'"]').eq(1).click()
        
           
    }

    enterSubcategory(subcategory :string) {
        cy.get(subcategory_textbox).click()
        cy.wait(1000)
        cy.get('[title="'+subcategory+'"]').click()
    }

    enterType(type :string) {
        cy.get(type_textbox).click()
        cy.wait(500)
        cy.get('[title="'+type+'"]').eq(1).click()
        
    }
    validateFail_Item(validateFail: string) {
        cy.get(validateFail_item).should('have.text', validateFail)
    }
    validateFail_Amount(validateFail: string) {
        cy.get(validateFail_Amount).should('have.text', validateFail)
    }
    validateFail_Currency(validateFail: string) {
        cy.get(validateFail_Currency).should('have.text', validateFail)
    }
    validateFail_AmountThb(validateFail: string) {
        cy.get(validateFail_Amountthb).should('have.text', validateFail)
    }
    
    ValidateSuccess_Category(Validate: string) {
        cy.get(validate_cate).should('contain', Validate)
    }
    ValidateSuccess_Subcategory(ValidateAmount: string) {
        cy.get(validate_subcat).should('contain', ValidateAmount)
    }
    ValidateSuccess_Type(ValidateAmount: string) {
        cy.get(validate_type).should('contain', ValidateAmount)
    }
    ValidateSuccess_Item(ValidateAmount: string) {
        cy.get(validate_item).should('have.text', ValidateAmount)
    }
    ValidateSuccess_Amount(ValidateAmount: string) {
        cy.get(Validate_Amount).should('contain', ValidateAmount)
    }
    ValidateSuccess_AmountThb(ValidateAmountThb: string) {
        cy.get(Validate_AmountThb).should('contain', ValidateAmountThb)
    }
    validateSuccess_income(validateFail1: String) {
        cy.get(validatesuccess_income).should('have.text', validateFail1)
    }
} 