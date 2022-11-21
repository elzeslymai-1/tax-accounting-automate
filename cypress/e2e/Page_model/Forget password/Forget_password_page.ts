let email_textbox = '#email'
let forgetPassword_buton = '.ant-btn'
let loginPage_button = '.text-primary'

let validateEmail_box = '.ant-form-item-explain-error'
let validateSuccess_box = '.font-normal'
let validateLoginpage = '.text-center'

export class ForgetPassword {

    //Step to login
    url(base_url: string) {
        cy.visit(base_url)
    }

    enterEmail(email : string) {
        cy.get(email_textbox).type(email,{delay:0})
    }

    clickForgetpassword(){
        cy.get(forgetPassword_buton).click()
    }

    clickLoginpage(){
        cy.get(loginPage_button).click()
    }

    validateEmail_null(email : string){
        cy.get(validateEmail_box).should('have.text', email)
    }

    validateEmail_wrongformat(email : string){
        cy.get(validateEmail_box).should('have.text', email)
    }
    
    validateEmail_casesensitive(email : string){
        cy.get(validateEmail_box).should('have.text', email)
    }

    validateForgetpassword_success(success : string){
        cy.get(validateSuccess_box).should('have.text', success)
    }

    validateLoginpage_button(loginpage : string){
        cy.get(validateLoginpage).should('have.text', loginpage)
    }
}

export class validateFormforgetpassword {

    //Assert
    validateEmail_box(){
        cy.get('body').then(($body) =>{
            expect($body.find(email_textbox).length).to.equal(1)
        })
    }

    validateForgetpassword_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(forgetPassword_buton).length).to.equal(1)
        })
    }

    validateLoginpage_button(){
        cy.get('body').then(($body) =>{
            expect($body.find(loginPage_button).length).to.equal(1)
        })
    }

}