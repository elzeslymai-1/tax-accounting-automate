import { LoginPage } from "../Login page/Login_page"
const login = new LoginPage();
//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(1)'
let firstName_box = '#control-hooks_firstname'
let lastName_box = '#control-hooks_lastname'
let email_box = '#control-hooks_email'
let password_box = '#control-hooks_password'
let showPassword_button = '//*[@id="control-hooks"]/div[4]/div/div[2]/div/div/span/span' //xpath
let confirmPassword = '#control-hooks_confirmPassword'
let showConfrimpassword_button = '//*[@id="control-hooks"]/div[5]/div/div[2]/div/div/span/span' //xpath
let subbmit_button = '.ant-btn'
let accountMenu_button = '.rounded-full'
let manageAccount_button = '.font-medium > .leading-10'
let logout_button = '.leading-10 > .font-medium'

//variable validate action box
let validateFirstname_box = '#control-hooks_firstname_help > .ant-form-item-explain-error'
let validateLastname_box = '#control-hooks_lastname_help > .ant-form-item-explain-error'
let validateEmail_box = '#control-hooks_email'
let validatePassword_box = '#control-hooks_password_help > .ant-form-item-explain-error'
let validateShowpassword_button = '#control-hooks_password'
let validateConfirmpassword_box = '#control-hooks_confirmPassword_help > .ant-form-item-explain-error'
let validateShowconfirmpassword_button = '#control-hooks_confirmPassword'
let validateSuccess = ':nth-child(1) > .flex > .text-blue'
let validateLogin_with_newpassword = '.mb-3'

//variable validate element
let validateFirstname = '#control-hooks_firstname'
let validateLastname = '#control-hooks_lastname'
let validateEmail = '#control-hooks_email'
let validatePassword = '#control-hooks_password'
let validateConfirmpassword = '#control-hooks_confirmPassword'
let validateSubmit = '.ant-btn'


export class EditProfile {

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    clickProjectfromdialog() {
        cy.get(selectProjectfromdialog_button).click()
    }

    clickAccountmenu() {
        cy.get(accountMenu_button).click()
    }

    clickManageaccount() {
        cy.get(manageAccount_button).click()
    }

    clickLogout() {
        cy.get(logout_button).click()
    }

    clickShowpassword_button() {
        cy.xpath(showPassword_button).click()
    }

    clickShowconfirmpassword_button() {
        cy.xpath(showConfrimpassword_button).click()
    }

    clickSubmit() {
        cy.get(subbmit_button).click()
    }

    enterFirstname(message: string) {
        cy.get(firstName_box).type(message,{delay:0})
    }

    enterLastname(message: string) {
        cy.get(lastName_box).type(message,{delay:0})
    }

    clearFirstname() {
        cy.get(firstName_box).clear()
    }

    clearLastname() {
        cy.get(lastName_box).clear()
    }

    enterPassword(message: string) {
        cy.get(password_box).type(message,{delay:0})
    }

    enterConfirmpassword(message: string) {
        cy.get(confirmPassword).type(message,{delay:0})
    }

    clearPassword() {
        cy.get(password_box).clear()
    }

    clearConfirmpassword() {
        cy.get(confirmPassword).clear()
    }

    //Assert
    validateShowFirstname(message: string) {
        cy.get(firstName_box).should('have.value', message)
    }

    validateShowLastname(message: string) {
        cy.get(lastName_box).should('have.value', message)
    }

    validateFirstname_box(message: string) {
        cy.get(validateFirstname_box).should('have.text', message)
    }

    validateLastname_box(message: string) {
        cy.get(validateLastname_box).should('have.text', message)
    }

    validateEmail_box() {
        cy.get(validateEmail_box).should('be.disabled')
    }

    validatePassword_box(message: string) {
        cy.get(validatePassword_box).should('have.text', message)
    }

    validateConfirmpassword_box(message: string) {
        cy.get(validateConfirmpassword_box).should('have.text', message)
    }

    validateShowpassword_button() {
        cy.get(validateShowpassword_button).should('have.attr', 'type').and('equal', 'text')
    }

    validateShowconfirmpassword_button() {
        cy.get(validateShowconfirmpassword_button).should('have.attr', 'type').and('equal', 'text')
    }

    validateSuccess(message: string) {
        cy.get(validateSuccess).should('have.text', message)
    }

    validateLogin_newpassword(message: string) {
        cy.get(validateLogin_with_newpassword).should('have.text', message)
    }

    resetdata() {
        cy.wait(500)
        this.clickProjectfromdialog()
        this.clickAccountmenu()
        this.clickLogout()
        cy.wait(500)
        
        //login
        login.enterUsername('champ_psu@outlook.co.th')
        login.enterPassword('22222222')
        login.clickLogin()

        //select project from dialog
        this.clickProjectfromdialog()
        cy.wait(500)
        //click account menu (top-right)
        this.clickAccountmenu()
        cy.wait(300)
        //click manage account menu
        this.clickManageaccount()
        cy.wait(1000)

        //clear password
        this.clearFirstname()
        //clear confirm password
        this.clearLastname()

        //enter firstname
        this.enterFirstname('Juggrid')
        //enter lastname
        this.enterLastname('Chetwichian')

        //enter password
        this.enterPassword('11111111')
        //enter confirm password
        this.enterConfirmpassword('11111111')

        //click submit
        this.clickSubmit()
    }
}

export class ValidateEditprofile {

    //Assert

    validateFirstname_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateFirstname).length).to.equal(1)
        })
    }

    validateLastname_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateLastname).length).to.equal(1)
        })
    }

    validateEmail_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateEmail).length).to.equal(1)
        })
    }

    validatePassword_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validatePassword).length).to.equal(1)
        })
    }

    validateConfirmpassword_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateConfirmpassword).length).to.equal(1)
        })
    }

    validateSubmit_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSubmit).length).to.equal(1)
        })
    }

}