import { LoginPage } from "../Login page/Login_page"
const loginpage = new LoginPage()

let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=income-management]'
let validateFail_update = '.ant-form-item-explain-error'
let validatesuccess_income='.px-0 > .justify-between > :nth-child(1)'
let Edit_button = '.py-0 > .ant-image > .ant-image-img'
let x_button = '.ant-modal-wrap:nth-child(2) .ant-modal-close path'
let Update_button = '#control-hooks2 > :nth-child(1) > .flex > .ant-btn > span'
let Edit_button1 =':nth-child(1) > :nth-child(8) > .py-0 > .ant-image > .ant-image-img'
let Edit_button_income = '.p-10 > :nth-child(4) > :nth-child(1)'
let category_textbox = '#control-hooks2 > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let subcategory_textbox ='#control-hooks2 > :nth-child(1) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let type_textbox ='#control-hooks2 > :nth-child(1) > :nth-child(3) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let item_textbox2 = '#control-hooks2_item'
let Amount_textbox2 = '#control-hooks2_amount'
let Currency_textbox = '#control-hooks2_currency'
let Amount_THB = '#control-hooks2_amountThb'
let Submit_button='//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div[2]/button' 

//Validate 
let validate_cate='tbody > :nth-child(1) > :nth-child(1) > div'
let validate_subcat='tbody > :nth-child(1) > :nth-child(2) > div'
let validate_type='tbody > :nth-child(1) > :nth-child(3) > div'
let validate_item='tbody > :nth-child(1) > :nth-child(4) > div'
let Validate_AmountThb ='tbody > :nth-child(1) > :nth-child(7) > div'
let Validate_Amount = 'tbody > :nth-child(1) > :nth-child(5) > div'
//validate success/fail
let validateFail_item='.ant-show-help-item-appear'
let validateFail_Amount='#control-hooks2_amount_help > .ant-form-item-explain-error'
let validateFail_Currency='#control-hooks2_currency_help > .ant-form-item-explain-error'
let validateFail_Amountthb='#control-hooks2_amountThb_help > .ant-form-item-explain-error'
let validatecheckSuccess_income='.rounded-2xl > :nth-child(1) > :nth-child(1) > .flex'
let validateSuccess = '.go502128938'
//Validate Element
let Validate_category='.w-full > tbody > :nth-child(1) > :nth-child(1) > div'
let Validate_Subcategory='.w-full > tbody > :nth-child(1) > :nth-child(2) > div'
let Validate_categorytype='.w-full > tbody > :nth-child(1) > :nth-child(3) > div'
let Validate_Item='.w-full > tbody > :nth-child(1) > :nth-child(4) > div'
let Validate_categoryamount='.w-full > tbody > :nth-child(1) > :nth-child(5) > div'
let Validate_categorycurrency='.w-full > tbody > :nth-child(1) > :nth-child(6) > div'
let Validate_categoryamountthb='.w-full > tbody > :nth-child(1) > :nth-child(7) > div'


export class Edit_income_Edit_dialog {
    Login(){
        loginpage.url('https://dev.tax-accounting.finstable.co.th/login')
        loginpage.enterUsername('champ_psu@outlook.co.th')
        loginpage.enterPassword('11111111')
        loginpage.clickLogin()

        this.clickSelectproject()
        //select Create income menu
        this.clickCreateincomemenu()
            cy.wait(500)
    }

    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreateincomemenu() {
        cy.get(createincomeMenu_button).click()
    }
    clickEditbutton(){
        cy.get(Edit_button).click()   
    }  
    clickUpdatebutton() {
        cy.get(Update_button).click()
    }
    clickSubmit_button() {
        cy.xpath(Submit_button).click()
    }
    enterItem(item: string) {
        cy.get(item_textbox2).type(item,{delay:0})
    }

    enterItemclear() {
        cy.get(item_textbox2).clear()
    }

    enterAmounttextbox(textbox: string) {
        cy.get(Amount_textbox2).type(textbox,{delay:0})
    }

    enterAmounttextboxclear() {
        cy.get(Amount_textbox2).clear()
    }

    enterCurrencytextbox(currency: string) {
        cy.get(Currency_textbox).type(currency,{delay:0})
    }

    enterCurrencytextboxclear() {
        cy.get(Currency_textbox).clear()
    }

    enterAmountthbtextbox(Amountthb: string) {
        cy.get(Amount_THB).type(Amountthb,{delay:0})
    }

    enterAmountthbtextboxclear() {
        cy.get(Amount_THB).clear()
    }

    clickxbutton(){
        cy.get(x_button).click()
    }

    clickEditbutton1(){
        cy.get(Edit_button1).click()
    }
    enterCategory(category : string) {
        cy.get(category_textbox).click()
        cy.wait(500)
        cy.get('[title="'+category+'"]').eq(0).click()
           
    }

    enterSubcategory(subcategory :string) {
        cy.get(subcategory_textbox).click()
        cy.wait(1000)
        cy.get('[title="'+subcategory+'"]').eq(0).click()
    }

    enterType(type :string) {
        cy.get(type_textbox).click()
        cy.wait(500)
        cy.get('[title="'+type+'"]').eq(0).click()
        
    }

    clickEdit_button_income(){
        cy.get(Edit_button_income).click()   
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
    validatecheckSuccess_income(Validate: string) {
        cy.get(validatecheckSuccess_income).should('contain', Validate)
    }

    
    validateFail1(validateFail: string) {
        cy.get(validateFail_update).should('have.text', validateFail)
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
    validateSuccess(validateFail1: String) {
        cy.get(validateSuccess).should('have.text', validateFail1)
    }
    validateSuccess_income(validateFail1: String) {
        cy.get(validatesuccess_income).should('have.text', validateFail1)
    }
    validateAddincome_success(a: string, b: string, c: string, d: string, e: string, f: string, g: string) {
        cy.get(Validate_category).should('have.text', a)
        cy.get(Validate_Subcategory).should('contain', b)
        cy.get(Validate_categorytype).should('contain', c)
        cy.get(Validate_Item).should('contain', d)
        cy.get(Validate_categoryamount).should('contain', e)
        cy.get(Validate_categorycurrency).should('contain', f)
        cy.get(Validate_categoryamountthb).should('contain', g)
    }
}