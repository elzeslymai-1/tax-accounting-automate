import { LoginPage } from "../Login page/Login_page"
const loginpage = new LoginPage()


let category_textbox = '#control-hooks > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let subcategory_textbox ='#control-hooks > :nth-child(1) > :nth-child(2) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'
let type_textbox ='#control-hooks > :nth-child(1) > :nth-child(3) > .ant-form-item > .ant-row > .ant-col-16 > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item'

//button
let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=income-management]'
let submit_button ='.mt-8 > .flex > .ant-btn'
let Edit_button = '.p-10 > :nth-child(4) > :nth-child(1)'
let view_button='.p-10 > :nth-child(4) > :nth-child(2)'
//validate 
let Validate_category = '.p-10 > :nth-child(1) > div'
let Validate_Subcategory = '.p-10 > :nth-child(2) > div'
let Validate_categorytype = '.p-10 > :nth-child(3) > div'
let Validate_Item = '.p-10 > :nth-child(4) > div'
let Validate_categoryamount = '.p-10 > :nth-child(5) > div'
let Validate_categorycurrency = '.p-10 > :nth-child(6) > div'
let Validate_categoryamountthb = '.p-10 > :nth-child(7) > div'
let Validatetext_income= '.text-xl'
let Validatetext_amountthb1='.mt-7 > :nth-child(1) > .flex > .font-semibold'
let Validatetext_amountthb2=':nth-child(2) > .flex > .font-semibold'
let Validatetext_amountthb3='.pt-14 > .font-semibold'
export class view_income {

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
    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreateincomemenu() {
        cy.get(createincomeMenu_button).click()
    }

    clickEdit_button(){
        cy.get(Edit_button).click()   
    }
    clickView_button(){
        cy.get(view_button).click()   
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
    clickSubmit() {
        cy.get(submit_button).click()
    }

    validatetext_income(validateFail: string) {
        cy.get(Validatetext_income).should('have.text', validateFail)
    }
    validatetext_amountthb1(validateFail: string) {
        cy.get(Validatetext_amountthb1).should('contain', validateFail)
    }
    validatetext_amountthb2(validateFail: string) {
        cy.get(Validatetext_amountthb2).should('contain', validateFail)
    }
    validatetext_amountthb3(validateFail: string) {
        cy.get(Validatetext_amountthb3).should('contain', validateFail)
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