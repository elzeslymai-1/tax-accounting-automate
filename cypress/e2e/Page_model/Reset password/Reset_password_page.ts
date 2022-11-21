//Global Variable
let newPassword_textbox = '#password'
let confirmPassword_textbox = '#confirmPassword'

let showNewpassword_button = '//*[@id="__next"]/div/div[2]/div/div/div/form/div[1]/div/div/div/div/div/span/span/span' //xpath
let showConfirmpassword_button = '//*[@id="__next"]/div/div[2]/div/div/div/form/div[2]/div/div/div/div/div/span/span/span' //xpath
let resetPassword_buton = '.ant-btn'
let loginPage_button = '.text-primary'

let validateNewpassword_box = '#password_help'
let validateConfirmpassword_box = '#confirmPassword_help'
let validateResetpassword_success = '.go2072408551' 
let validateLoginpage = '.text-center'
let validateExpire_url = '.go3958317564'

export class ResetPassword {

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    enterNewpassword(newpassword : string) {
        cy.get(newPassword_textbox).type(newpassword,{delay:0})
    }

    enterConfirmpassword(confirmpassword : string) {
        cy.get(confirmPassword_textbox).type(confirmpassword,{delay:0})
    }

    clickShownewpassword(){
        cy.xpath(showNewpassword_button).click()
    }

    clickShowconfirmpassword(){
        cy.xpath(showConfirmpassword_button).click()
    }

    clickResetpassword(){
        cy.get(resetPassword_buton).click()
    }

    clickLoginpage(){
        cy.get(loginPage_button).click()
    }

    //Assert
    validateNewpassword_null(message : string){
        cy.get(validateNewpassword_box).should('have.text', message)
    }

    validateNewpassword_less8(message : string){
        cy.get(validateNewpassword_box).should('have.text', message)
    }
    
    validateConfirmpassword_null(message : string){
        cy.get(validateConfirmpassword_box).should('have.text', message)
    }

    validatePassword_notmatch(message : string){
        cy.get(validateConfirmpassword_box).should('have.text', message)
    }

    validateShownewpassword_button() {
        cy.get(newPassword_textbox).should('have.attr', 'type').and('equal', 'text')
    }

    validateShowconfirmpassword_button() {
        cy.get(confirmPassword_textbox).should('have.attr', 'type').and('equal', 'text')
    }

    validateResetpassword_success(message : string){
        cy.get(validateResetpassword_success).should('have.text', message)
    }

    validateLoginpage_button(message : string){
        cy.get(validateLoginpage).should('have.text', message)
    }

    validateExpireURL(message : string){
        cy.get(validateExpire_url).should('have.text', message)
    }
}

export class validateFormresetpassword {

    //Assert
    validateNewpassword_box(){
        cy.get('body').then(($body) =>{
            expect($body.find(newPassword_textbox).length).to.equal(1)
        })
    }

    validateConfirmpassword_Box(){
        cy.get('body').then(($body) =>{
            expect($body.find(confirmPassword_textbox).length).to.equal(1)
        })
    }

    validateShownewpassword_button(){
        cy.xpath(showNewpassword_button).then(($showpassword) => {
            expect($showpassword.length).to.equal(1)
        })
    }

    validateShowconfirmpassword_button(){
        cy.xpath(showConfirmpassword_button).then(($showpassword) => {
            expect($showpassword.length).to.equal(1)
        })
    }

    validateResetpassword_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(resetPassword_buton).length).to.equal(1)
        })
    }

    validateLoginpage_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(loginPage_button).length).to.equal(1)
        })
    }

    
}