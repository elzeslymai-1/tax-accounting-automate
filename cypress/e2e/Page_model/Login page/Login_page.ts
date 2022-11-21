//Global variable
let username_textbox = '#email'
let password_textbox = '#password'

let login_button = '.ant-btn'
let showpassword_button = '//*[@id="__next"]/div/div[2]/div/div[2]/div/div[2]/form/div[2]/div/div[1]/div/div[1]/div/span/span/span'  //xpath
let rememberme_button = '#remember'
let forgetpassword_button = '.text-primary'

let validateUsername_box = '.ant-form-item-explain-error'
let validateFailed_box = '.text-danger'
let validatePassword_box = '.ant-form-item-explain-error'
let validateSuccess_box = '.mb-3'
let validateShowpassword_box = '#password'
let validateRememberme_box = '.ant-checkbox'
let validateFogetpassword_box = '.font-normal'

export class LoginPage {

    //Step to login
    url(base_url: string) {
        cy.visit(base_url)
    }

    enterUsername(username: string) {
        cy.get(username_textbox).type(username,{delay:0})
    }

    enterPassword(password: string) {
        cy.get(password_textbox).type(password,{delay:0})
    }

    clickLogin() {
        cy.get(login_button).click()
    }

    clickShowpassword() {
        cy.xpath(showpassword_button).click()
    }

    clickRememberme() {
        cy.get(rememberme_button).click()
    }

    clickForgetpassword() {
        cy.get(forgetpassword_button).click()
    }

    //Assert
    validatePassword_null(validate_text: string) {
        cy.get(validatePassword_box).should('have.text', validate_text)
    }

    validateUsername_null(validate_text: string) {
        cy.get(validateUsername_box).should('have.text', validate_text)
    }

    validateUsername_WrongFormat(validate_text: string) {
        cy.get(validateUsername_box).should('have.text', validate_text)
    }

    validateUsername_Casesensitive(validate_text: string) {
        cy.get(validateSuccess_box).should('have.text', validate_text)
    }

    validateLogin_failed(validate_text: string) {
        cy.get(validateFailed_box).should('have.text', validate_text)
    }

    validateButton_showpassword() {
        cy.get(validateShowpassword_box).should('have.attr', 'type').and('equal', 'text')
    }

    validateButton_rememberme() {
        cy.get(validateRememberme_box).should('have.attr', 'class').and('equal', 'ant-checkbox ant-checkbox-checked')
    }

    validateButton_forgetpassword(validate_text: string) {
        cy.get(validateFogetpassword_box).should('have.text', validate_text)
    }

    validateLogin_success(validate_text: string) {
        cy.get(validateSuccess_box).should('have.text', validate_text)
    }
}

export class validateFormlogin {

    //Assert
    validateEmail_box(){
        cy.get('body').then(($body) =>{
            expect($body.find(username_textbox).length).to.equal(1)
        })
    }

    validatePassword_box(){
        cy.get('body').then(($body) =>{
            expect($body.find(password_textbox).length).to.equal(1)
        })
    }

    validateShowpassword_box(){
        cy.xpath(showpassword_button).then(($showpassword) => {
            expect($showpassword.length).to.equal(1)
        })
    }

    validateRememberme_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(rememberme_button).length).to.equal(1)
        })
    }

    validateForgetpassword_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(forgetpassword_button).length).to.equal(1)
        })
    }

    validateLogin_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(login_button).length).to.equal(1)
        })
    }
}