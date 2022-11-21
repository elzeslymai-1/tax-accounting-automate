import { LoginPage } from "../Login page/Login_page"
const loginPage = new LoginPage()

//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(1)'
let userManagement_button = '[data-menu-id$=user-management]'
let serarch_box = '.ant-input'
let filter_dropdown = '.ant-select-selection-item'
let filterAll_button = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[1]/div' //xpath
let filterSuper_admin_button = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[2]' //xpath
let filterDeveloper_button = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[3]' //xpath
let filterAccounting_button = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[4]' //xpath
let add_button = ':nth-child(2) > .ant-btn'
let edit_button = ':nth-child(1) > :nth-child(4) > .text-left > .bg-gray5'
let delete_button = ':nth-child(1) > :nth-child(4) > .text-left > .ml-2'
let page_of_box = '.px-2.text-primary-black > p'
let previous_page_button = '.gap-x-4 > :nth-child(1) > .anticon'
let item_per_page_button = '.appearance-none'
let next_page_button = '.border-gray > .anticon'
let cancel_delete_button = '.ant-modal-confirm-btns > :nth-child(1)'
let confirm_delete_button = '.ant-btn-dangerous'

//variable validate element
let validate_serarch = '.ant-input'
let validate_filter = '.ant-select-selection-item'
let validate_role_all = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[1]' //xpath
let validate_role_super_admin = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[2]' //xpath
let validate_role_developer = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[3]' //xpath
let validate_role_accounting = '/html/body/div[3]/div/div/div/div[2]/div[1]/div/div/div[4]' //xpath
let validate_add = ':nth-child(2) > .ant-btn'
let validate_edit = ':nth-child(1) > :nth-child(4) > .text-left > .bg-gray5'
let validate_delete = ':nth-child(1) > :nth-child(4) > .text-left > .ml-2'
let validate_page_of = '.px-2.text-primary-black > p'
let validate_previous_page = '.cursor-not-allowed > .anticon'
let validate_item_per_page = '.appearance-none'
let validate_next_page = '.border-gray > .anticon'
let validate_cancel_delete = '.ant-modal-confirm-btns > :nth-child(1)'
let validate_confirm_delete = '.ant-btn-dangerous'

//variable validate action button
let validate_add_button = '.text-xl'
let validate_edit_button = '.text-xl'
let validate_delete_button = '.ant-modal-confirm-title'
let validate_cancel_delete_button = '.ant-modal-confirm-title'
let validate_next_page_button = '.px-2.text-primary-black > p'


export class UserManagement {

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    login(base_url : string) {

        this.url(base_url)
        //login
        loginPage.enterUsername('champ_psu@outlook.co.th')
        loginPage.enterPassword('11111111')
        loginPage.clickLogin()

        this.clickProjectfromdialog()
        this.clickUsermanagement()
        cy.wait(1000)
    }

    clickProjectfromdialog() {
        cy.get(selectProjectfromdialog_button).click()
    }

    clickUsermanagement() {
        cy.get(userManagement_button).click()
    }

    enterSearch_box(message: string) {
        cy.get(serarch_box).type(message,{delay:0})
    }

    clearSearch_box() {
        cy.get(serarch_box).clear()
    }

    clickFilter_dropdown() {
        cy.get(filter_dropdown).click()
    }

    clickFilter_role_all() {
        cy.xpath(filterAll_button).click()
    }

    clickFilter_role_superadmin() {
        cy.xpath(filterSuper_admin_button).click()
    }

    clickFilter_role_developer() {
        cy.xpath(filterDeveloper_button).click()
    }

    clickFilter_role_accounting() {
        cy.xpath(filterAccounting_button).click()
    }

    clickAdd_button() {
        cy.get(add_button).click()
    }

    clickEdit_button() {
        cy.get(edit_button).click()
    }

    clickDelete_button() {
        cy.get(delete_button).click()
    }

    clickCancel_delete_button(){
        cy.get(cancel_delete_button).click()
    }

    clickConfirm_delete_button(){
        cy.get(confirm_delete_button).click()
    }

    clickPrevious_page_button() {
        cy.get(previous_page_button).click()
    }

    selectItem_per_page_button(message : string) {
        cy.get(item_per_page_button).select(message)
    }

    clickNext_page_button() {
        cy.get(next_page_button).click()
    }

    //Assert

    validateSearch_box_first_name(message: string) {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).find('.item-center>div.pt-0').eq(0)
                    .should('contain', message)
            }
        })
    }

    validateSearch_box__last_name(message: string) {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).find('.item-center>div.pt-0').eq(0)
                    .should('contain', message)
            }
        })
    }

    validateSearch_box_Email(message: string) {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(1).find('div').eq(0).should('contain', message)
            }
        })
    }

    validateFilter_super_admin() {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(2).find('.justify-center>div').eq(0)
                    .should('have.attr', 'style')
                    .and('equal', 'background-color: rgb(28, 65, 119);')
            }
        })
    }

    validateFilter_developer() {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(2).find('.justify-center>div').eq(0)
                    .should('have.attr', 'style')
                    .and('equal', 'background-color: rgb(237, 106, 93);')
            }
        })
    }

    validateFilter_accounting() {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(2).find('.justify-center>div').eq(0)
                    .should('have.attr', 'style')
                    .and('equal', 'background-color: rgb(244, 190, 79);')
            }
        })
    }

    validateAdd_button(message : string){
        cy.get(validate_add_button).should('have.text', message)
    }

    validateEdit_button(message : string){
        cy.get(validate_edit_button).should('have.text', message)
    }

    validateDelete_button(message : string){
        cy.get(validate_delete_button).should('have.text', message)
    }

    validateCancel_delete_button(){
        cy.get('body').then(($body) => {
            expect($body.find(validate_cancel_delete_button).length).to.equal(0)
        })
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

    validatDelete_button(message : string){
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < ($tbody.length - 1); i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(1).find('div').eq(0).should('not.contain', message)
            }
        })
    }
}

export class ValidateUsermanagement {

    //Assert Element
    validateSearch_box_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_serarch).length).to.equal(1)
        })
    }

    validateFilter_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_filter).length).to.equal(1)
        })
    }

    validateFilter_role_all_element() {
        cy.xpath(validate_role_all).then(($data) => {
            expect($data.length).to.equal(1)
        })
    }

    validateFilter_role_superadmin_element() {
        cy.xpath(validate_role_super_admin).then(($data) => {
            expect($data.length).to.equal(1)
        })
    }

    validateFilter_role_developer_element() {
        cy.xpath(validate_role_developer).then(($data) => {
            expect($data.length).to.equal(1)
        })
    }

    validateFilter_role_accounting_element() {
        cy.xpath(validate_role_accounting).then(($data) => {
            expect($data.length).to.equal(1)
        })
    }

    validateAdd_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_add).length).to.equal(1)
        })
    }

    validateEdit_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_edit).length).to.equal(1)
        })
    }

    validateDelete_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_delete).length).to.equal(1)
        })
    }

    validatePage_of_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_page_of).length).to.equal(1)
        })
    }

    validatePrevious_page_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_previous_page).length).to.equal(1)
        })
    }

    validateItem_per_page_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_item_per_page).length).to.equal(1)
        })
    }

    validateNext_page_button_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_next_page).length).to.equal(1)
        })
    }

    validateDelete_dialog() {
        cy.get('body').then(($body) => {
            expect($body.find(validate_cancel_delete).length).to.equal(1)
            expect($body.find(validate_confirm_delete).length).to.equal(1)
        })
    }
}


