//Global variable

let Add_button = ':nth-child(1) > .flex > .ant-btn'
let Amount_textbox2 = '#control-hooks2_amount'
let Edit_button = '.p-10 > :nth-child(4) > :nth-child(1)'
let submit_button ='.mt-8 > .flex > .ant-btn > span'
let Selectcategory_dropdown = '#control-hooks_category'
let Selectsubcategory_dropdown = '#control-hooks_subCategory'
let Selecttype_dropdown = '#control-hooks_type'
let item_box = '#control-hooks_item'
let amount_box = '#control-hooks_amount'
let currency_box = '#control-hooks_currency'
let amountThb_box = '#control-hooks_amountThb'

//button
let categorydropdawn_button='#control-hooks_category'
//xpath 
let category_button= '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[1]'




export class Edit_income {

    category_button(){
        cy.xpath(category_button).click()
    }

    clickcat_dropdawn(){
    cy.get(categorydropdawn_button).click()
    }

    clickEdit_button(){
        cy.get(Edit_button).click()   
    }
    
    entercategorydropdown(category: string) {
        cy.get(Selectcategory_dropdown).click()
        cy.contains(category).click()
    }

    entersubcategorydropdown(subcategory: string) {
        cy.get(Selectsubcategory_dropdown).click()
        cy.contains(subcategory).click
    }

    entertypedropdown(type: string) {
        cy.get(Selecttype_dropdown).click()
        cy.contains(type).click
    }

    enterItembox(itembox: string) {
        cy.get(item_box).type(itembox,{delay:0})
    } 
    
    enterAmountbox(amountbox: string) {
        cy.get(amount_box).type(amountbox,{delay:0})
    } 

    enterCurrencybox(currencybox: string) {
        cy.get(currency_box).type(currencybox,{delay:0})
    } 

    enteramountThb_box(amountThbbox: string) {
        cy.get(amountThb_box).type(amountThbbox,{delay:0})
    }

    enterAmounttextboxclear() {
        cy.get(Amount_textbox2).clear()
    }

    clickAddbutton(){
        cy.get(Add_button).click()
    } 
    clickSubmit() {
        cy.get(submit_button).click()
    }
    

}











   