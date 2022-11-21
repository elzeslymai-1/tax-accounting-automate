//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(1)'
let dropdownSelectproject_button = '[data-menu-id$=sub1]'
let dashboard_button = '[data-menu-id$=dashboard]'
let costReport_button = '[data-menu-id$=cost]'
let incomeReport_button = '[data-menu-id$=report]'
let incomeManualreprot_button = '[data-menu-id$=submenu-income-1]'
let incomeAutoreprot_button = '[data-menu-id$=submenu-income-2]'
let profit_loss_report_button = '[data-menu-id$=profit-loss]'
let createCost_button = '[data-menu-id$=cost-management]'
let createIncome_button = '[data-menu-id$=income-management]'
let userManagement_button = '[data-menu-id$=user-management]'
let accountMenu_button = '.rounded-full'
let closeDialog_button = '.ant-modal-close-x'
let manageAccount_button = '.font-medium > .leading-10'
let logout_button = '.leading-10 > .font-medium'

//variable validate element
let valildateSelectproject = '.mb-3'
let validateLogo = '.rounded-full'
let validateUsername = ':nth-child(1) > .flex > .text-blue'
let validateUserrole = ':nth-child(1) > .flex > .text-gray3'
let validateAccountmenu_logo = '.rounded-full'
let validateAccountmenu_user_name = '.mb-2 > .text-xs:nth-child(1)'
let validateAccountmenu_email = '.mb-2 > .text-gray3'
let validateAccountmenu_user_role = '.text-xs:nth-child(3)'
let validateAccountmenu_manageaccount = '.font-medium > .leading-10'
let validateAccountmenu_logout = '.leading-10 > .font-medium'

//variable validate action button
let validateselectProjectfromdialog_button = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div/div[1]' //xpath
let validateClosedialog_button = '.go3958317564'
let validateAccountmenu_manageAccount_button = '.text-xl'
let validateAccountmenu_logout_button = '.text-center'
let validateDashboard_button = '.text-xl:nth-child(1)'
let validateCostreport_button = '.text-xl'
let validateIncome_manula_report_button = '.text-xl'
let validateIncome_auto_report_button = '.text-xl'
let validateProfit_loss_report_button = '.text-xl'
let validateCreatecost_button = '.text-xl:nth-child(1)'
let validateCreateincome_button = '.text-xl:nth-child(1)'
let validateUsermanagement_button = '.text-xl:nth-child(1)'


export class Accounting {

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    clickProjectfromdialog(){
        cy.get(selectProjectfromdialog_button).click()
    }

    clickClostdialog(){
        cy.get(closeDialog_button).click()
    }

    clickAccountmenu(){
        cy.get(accountMenu_button).click()
    }

    clickAccountmenu_manageaccount(){
        cy.get(manageAccount_button).click()
    }

    clickAccountmenu_logout(){
        cy.get(logout_button).click()
    }

    clickDashboard_menu(){
        cy.get(dashboard_button).click()
    }

    clickCostreport_menu(){
        cy.get(costReport_button).click()
    }

    clickIncomereport_menu(){
        cy.get(incomeReport_button).click()
    }

    clickManualreport_menu(){
        cy.get(incomeManualreprot_button).click()
    }

    clickAutoreport_menu(){
        cy.get(incomeAutoreprot_button).click()
    }

    clickProfit_loss_menu(){
        cy.get(profit_loss_report_button).click()
    }

    clickCreatecost_menu(){
        cy.get(createCost_button).click()
    }

    clickCreateincome_menu(){
        cy.get(createIncome_button).click()
    }

    clickUsermanagement_menu(){
        cy.get(userManagement_button).click()
    }
    

    //Assert
    validateSelectproject_dialog(message : string){
        cy.xpath(validateselectProjectfromdialog_button).should('have.text', message)
    }

    validateClosedialog(message : string){
        cy.get(validateClosedialog_button).should('have.text', message)
    }
    
    validateDashboard_menu(message : string){
        cy.get(validateDashboard_button).should('have.text', message)
    }

    validateCostreport_menu(message : string){
        cy.get(validateCostreport_button).should('have.text', message)
    }

    validateManualincomereport_menu(message : string){
        cy.get(validateIncome_manula_report_button).should('have.text', message)
    }

    validateAutoincomereport_menu(message : string) {
        cy.get(validateIncome_auto_report_button).should('have.text', message)
    }

    validateProfit_loss_report_menu(message : string) {
        cy.get(validateProfit_loss_report_button).should('have.text', message)
    }

    validateCreatecost_menu(message : string) {
        cy.get(validateCreatecost_button).should('have.text', message)
    }

    validateCreateincome_menu(message : string) {
        cy.get(validateCreateincome_button).should('have.text', message)
    }

    validateUsermanagement_menu(message : string) {
        cy.get(validateUsermanagement_button).should('have.text', message)
    }

    validateAccountmenu_manageaccount(message : string) {
        cy.get(validateAccountmenu_manageAccount_button).should('have.text', message)
    }

    validateAccountmenu_logout(message : string) {
        cy.get(validateAccountmenu_logout_button).should('have.text', message)
    }

    
}

export class ValidateAccounting {

    //Assert
    validateSelectproject_dialog(){
        cy.get('body').then(($body) =>{
            expect($body.find(valildateSelectproject).length).to.equal(1)
            expect($body.find(closeDialog_button).length).to.equal(1)
            expect($body.find(selectProjectfromdialog_button).length).to.equal(1)
        })
    }

    validateLogo(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateLogo).length).to.equal(1)
        })
    }

    validateUser_name(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateUsername).length).to.equal(1)
        })
    }

    validateUser_role(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateUserrole).length).to.equal(1)
        })
    }

    validateSelectproject_dropdown(){
        cy.get('body').then(($body) =>{
            expect($body.find(dropdownSelectproject_button).length).to.equal(1)
        })
    }

    validateDashboard_menu(){
        cy.get('body').then(($body) =>{
            expect($body.find(dashboard_button).length).to.equal(1)
        })
    }

    validateCostreport_menu(){
        cy.get('body').then(($body) =>{
            expect($body.find(costReport_button).length).to.equal(1)
        })
    }

    validateIncomereport_dropdown(){
        cy.get('body').then(($body) =>{
            expect($body.find(incomeReport_button).length).to.equal(1)
        })
    }

    validateIncomereport_manual(){
        cy.get('body').then(($body) =>{
            expect($body.find(incomeManualreprot_button).length).to.equal(1)
        })
    }

    validateIncomereport_auto(){
        cy.get('body').then(($body) =>{
            expect($body.find(incomeAutoreprot_button).length).to.equal(1)
        })
    }

    validateProfit_loss(){
        cy.get('body').then(($body) =>{
            expect($body.find(profit_loss_report_button).length).to.equal(1)
        })
    }

    validateCreatecost_menu(){
        cy.get('body').then(($body) =>{
            expect($body.find(createCost_button).length).to.equal(1)
        })
    }

    validateCreateincome_menu(){
        cy.get('body').then(($body) =>{
            expect($body.find(createIncome_button).length).to.equal(1)
        })
    }

    validateUsermanagement_menu(){
        cy.get('body').then(($body) =>{
            expect($body.find(userManagement_button).length).to.equal(1)
        })
    }

    validateAccountmenu_logo(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_logo).length).to.equal(2)
        })
    }

    validateAccountmenu_username(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_user_name).length).to.equal(1)
        })
    }

    validateAccountmenu_email(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_email).length).to.equal(1)
        })
    }

    validateAccountmenu_role(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_user_role).length).to.equal(1)
        })
    }

    validateAccountmenu_account_management(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_manageaccount).length).to.equal(1)
        })
    }

    validateAccountmenu_logout(){
        cy.get('body').then(($body) =>{
            expect($body.find(validateAccountmenu_logout).length).to.equal(1)
        })
    }




}