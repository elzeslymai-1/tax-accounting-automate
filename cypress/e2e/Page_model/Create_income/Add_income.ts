import { LoginPage } from "../Login page/Login_page"
import { AddCost } from "../Create cost page/Add_cost_page";
const loginpage = new LoginPage()
const addCost = new AddCost();

//Global variable
let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=income-management]'
let add_button = '.flex > .ml-2 > span'
let delete_button = '.ml-2 > .ant-image > .ant-image-img'
let confirmdrlete = '.ant-btn-dangerous'
let selectMonth_textbox = '.ant-picker-input > input'
let category_textbox='#control-hooks_category'
let subcategory_textbox='#control-hooks_subCategory'
let type_textbox='#control-hooks_type'
let item_textbox = '#control-hooks_item'
let amount_textbox = '#control-hooks_amount'
let currency_textbox = '#control-hooks_currency'
let amountTHB_textbox = '#control-hooks_amountThb'
let add1_button = '//*[@id="control-hooks"]/div/div[9]/button' //xpath
let submit_button = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div[2]/button' //xpath
let item_per_page_button = '.appearance-none'
let next_page_button = '.border-gray > .anticon'
let previous_page_button = '.gap-x-4 > :nth-child(1) > .anticon'
let category_type_dropdown = '#control-hooks_category'
let subcategory_type_dropdown = '#control-hooks_subCategory'
let type_dropdown = '#control-hooks_type'
let category_type_fileter_HiringCost_button = '[title="Hiring Cost"]'
let category_type_fileter_Dividend_button = '[title="Dividend"]'
let category_type_fileter_Share_button = '[title="Share"]'
let category_type_fileter_TransactionFee_button = '[title="Transaction Fee"]'
let subcategory_type_fileter_platform_button = '[title="Platform"]'
let subcategory_type_fileter_ProjectOwnerCustomer_button = '[title="Project Owner (Customer)"]'
let subcategory_type_fileter_ReservedPortion_button = '[title="Reserved Portion"]'
let subcategory_type_fileter_Others_button = '[title="Others"]'
let type_fileter_Onetime_button = '[title="One-time"]'
let type_fileter_Daily_button = '[title="Daily"]'
let type_fileter_Monthly_button = '[title="Monthly"]'
let type_fileter_Annually_button = '[title="Annually"]'

//variable validate action box
let validate_next_page_button = '.px-2.text-primary-black > p'

let validateFail_Category = '#control-hooks_category_help > .ant-form-item-explain-error'
let validateFail_Subcategory = '#control-hooks_subCategory_help > .ant-form-item-explain-error'
let validateFail_Type = '#control-hooks_type_help > .ant-form-item-explain-error'
let validateFail_Item='.ant-show-help-item-appear'
let validateFail_Amount='#control-hooks_amount_help > .ant-form-item-explain-error'
let validateFail_Currency='#control-hooks_currency_help > .ant-form-item-explain-error'
let validateFail_Amountthb='#control-hooks_amountThb_help > .ant-form-item-explain-error'
let validateFail_Month = '.go2072408551'
let validateSuccess = '.go2072408551'
let Validate_AmountThb = 'tbody > :nth-child(1) > :nth-child(7) > div'
let Validate_Amount = 'tbody > :nth-child(1) > :nth-child(5) > div'

//Validate Element
let Validate_category = '.w-full > tbody > :nth-child(1) > :nth-child(1) > div'
let Validate_Subcategory = '.w-full > tbody > :nth-child(1) > :nth-child(2) > div'
let Validate_categorytype = '.w-full > tbody > :nth-child(1) > :nth-child(3) > div'
let Validate_Item = '.w-full > tbody > :nth-child(1) > :nth-child(4) > div'
let Validate_categoryamount = '.w-full > tbody > :nth-child(1) > :nth-child(5) > div'
let Validate_categorycurrency = '.w-full > tbody > :nth-child(1) > :nth-child(6) > div'
let Validate_categoryamountthb = '.w-full > tbody > :nth-child(1) > :nth-child(7) > div'




export class Createincome {
    Login(){
        loginpage.url(Cypress.env('base_url'))
        loginpage.enterUsername('champ_psu@outlook.co.th')
        loginpage.enterPassword('11111111')
        loginpage.clickLogin()

        this.clickSelectproject()
        //select Create income menu
        this.clickCreateincomemenu()
            cy.wait(500)
    }
    Delete_Creat_income(){
        //select Create income menu
        this.clickCreateincomemenu()
            cy.wait(500)
        for (var i = 0; i < 20 ; i++) {
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            cy.wait(500)
        }
    }

    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreateincomemenu() {
        cy.get(createincomeMenu_button).click()
    }

    clickAdd() {
        cy.get(add_button).click()
    }


    clickDelete() {
        cy.get(delete_button).click()
    }

    clickConfirmdelete() {
        cy.get(confirmdrlete).click()
    }

    clickAddbutton1() {
        cy.xpath(add1_button).click()
    }
    clickCategory_type_dropdown() {
        cy.get(category_type_dropdown).click()
    }

    clickSubcategory_type_dropdown() {
        cy.get(subcategory_type_dropdown).click()
    }

    clicktype_dropdown() {
        cy.get(type_dropdown).click()
    }
    
    enterMonth(month: string) {
        cy.get(selectMonth_textbox).click()
        cy.contains(month).click()
    }

    enterYear(year: string) {
        cy.get(selectMonth_textbox).click()
        cy.contains(year).click()
        cy.contains('2021').click()
    }

    enterCategory(category : string) {
        cy.get(category_textbox).click()
        cy.wait(500)
        cy.contains(category).click()
           
    }

    enterSubcategory(subcategory :string) {
        cy.get(subcategory_textbox).click()
        cy.wait(1000)
        cy.contains(subcategory).click()
    }

    enterType(type :string) {
        cy.get(type_textbox).click()
        cy.wait(500)
        cy.contains(type).click()
        
    }

    enterItem(item: string) {
        cy.get(item_textbox).type(item,{delay:0})
    }

    clearItem(){
        cy.get(item_textbox).clear()
    }

    enterAmount(amount: string) {
        cy.get(amount_textbox).type(amount,{delay:0})
    }
    clearAmount(){
        cy.get(amount_textbox).clear()
    }

    enterCurrency(currency: string) {
        cy.get(currency_textbox).type(currency,{delay:0})
    }

    clearCurrency(){
        cy.get(currency_textbox).clear()
    }

    enterAmount_THB(amountTHB: string) {
        cy.get(amountTHB_textbox).type(amountTHB,{delay:0})
    }

    clearAmount_THB(){
        cy.get(amountTHB_textbox).clear()
    }

    clickAddbutton() {
        cy.xpath(add1_button).click()
    }

    clickSubmit() {
        cy.xpath(submit_button).click()
    }

    validateFail(validateFail: string) {
        cy.get(validateFail_Category).should('have.text', validateFail)
    }

    validateCategory(validateFail: string){
        cy.get(validateFail_Category).should('have.text', validateFail)
    }
    validateSub_category(validateFail: string){
        cy.get(validateFail_Subcategory).should('have.text', validateFail)
    }
    validateType(validateFail: string){
        cy.get(validateFail_Type).should('have.text', validateFail)
    }
    validateItem(validateFail: string){
        cy.get(validateFail_Item).should('have.text', validateFail)
    }
    validateAmount(validateFail: string){
        cy.get(validateFail_Amount).should('have.text', validateFail)
    }
    validateFailCurrency(validateFail: string){
        cy.get(validateFail_Currency).should('have.text', validateFail)
    }
    validateAmountthb(validateFail: string){
        cy.get(validateFail_Amountthb).should('have.text', validateFail)
    }
    
    validateFail1(validateFail1: String) {
        cy.get(validateFail_Month).should('have.text', validateFail1)
    }

    validateSuccess(validateFail1: String) {
        cy.get(validateSuccess).should('have.text', validateFail1)
    }

    ValidateAmountThb(ValidateAmountThb: String) {
        cy.get(Validate_AmountThb).should('contain', ValidateAmountThb)
    }

    ValidateAmount(ValidateAmount: String) {
        cy.get(Validate_Amount).should('contain', ValidateAmount)
    }
    Validatecategory(Validatecategory: String) {
        cy.get(Validate_category).should('have.text', Validatecategory)
    }

    ValidateSubcategory(ValidateSubcategory: String) {
        cy.get(Validate_Subcategory).should('contain', ValidateSubcategory)
    }

    Validatecategorytype(Validatecategorytype: String) {
        cy.get(Validate_categorytype).should('contain', Validatecategorytype)
    }

    ValidateItem(ValidateItem: String) {
        cy.get(Validate_Item).should('contain', ValidateItem)
    }

    Validatecategoryamount(Validatecategoryamount: String) {
        cy.get(Validate_categoryamount).should('contain', Validatecategoryamount)
    }

    Validatecategorycurrency(Validatecategorycurrency: String) {
        cy.get(Validate_categorycurrency).should('contain', Validatecategorycurrency)
    }

    Validatecategoryamountthb(Validatecategoryamountthb: String) {
        cy.get(Validate_categoryamountthb).should('contain', Validatecategoryamountthb)
    }

    selectItem_per_page_button(message : string) {
        cy.get(item_per_page_button).select(message)
    }

    clickNext_page_button() {
        cy.get(next_page_button).click()
    }

    clickPrevious_page_button() {
        cy.get(previous_page_button).click()
    }
    validateItem_per_page_button(message: number){
        cy.get('tbody>tr').then(($tbody) => {
            expect($tbody.length-1).to.equal(message)
        })
    }

    validateNext_page_button(message : string){
        cy.get(validate_next_page_button).should('contain', message)
    }

    validatePrevious_page_button(message : string){
        cy.get(validate_next_page_button).should('contain', message)
    }

    validatecategory_type_filter_element(message: string) {
        switch (message) {
            case 'HiringCost':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_HiringCost_button).length).to.equal(1)

                })
                break
            case 'Dividend':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Dividend_button).length).to.equal(1)
                })
                break
            case 'Share':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Share_button).length).to.equal(1)
                })
                break
            case 'TransactionFee':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_TransactionFee_button).length).to.equal(1)
                })
                break
            
        }
    }

    validateSubcategory_type_filter_element(message: string) {
        switch (message) {
            case 'Platform':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_platform_button).length).to.equal(1)

                })
                break
            case 'ProjectOwnerCustomer':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_ProjectOwnerCustomer_button).length).to.equal(1)
                })
                break
            case 'ReservedPortion':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_ReservedPortion_button).length).to.equal(1)
                })
                break
            case 'Others':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_Others_button).length).to.equal(1)
                })
                break
        }
    }

    validatetype_filter_element(message: string) {
        switch (message) {
            case 'Onetime':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Onetime_button).length).to.equal(1)

                })
                break
            case 'Daily':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Daily_button).length).to.equal(1)
                })
                break
            case 'Monthly':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Monthly_button).length).to.equal(1)
                })
                break
            case 'Annually':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Annually_button).length).to.equal(1)
                })
                break
            
        }
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

    createIncome(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string) {
        
        cy.wait(300)
        this.clickAdd()
        this.enterMonth(a)
        this.enterCategory(b)
        this.enterSubcategory(c)
        this.enterType(d)
        this.enterItem(e)
        this.enterAmount(f)
        this.enterCurrency(g)
        this.enterAmount_THB(h)
        this.clickAddbutton1()
        cy.wait(300)
        this.clickSubmit()
        cy.wait(500)
    }

    createIncome_before(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string){
        cy.wait(300)
        this.clickAdd()
        this.enterYear('2022')
        this.enterMonth(a)
        this.enterCategory(b)
        this.enterSubcategory(c)
        this.enterType(d)
        this.enterItem(e)
        this.enterAmount(f)
        this.enterCurrency(g)
        this.enterAmount_THB(h)
        this.clickAddbutton1()
        cy.wait(300)
        this.clickSubmit()
        cy.wait(500)
    }
    
}

