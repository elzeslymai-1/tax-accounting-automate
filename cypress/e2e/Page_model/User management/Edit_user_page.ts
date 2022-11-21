import { LoginPage } from "../Login page/Login_page"
const loginPage = new LoginPage()
//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(1)'
let add_button = ':nth-child(2) > .ant-btn'
let edit_button = ':nth-child(1) > :nth-child(4) > .text-left > .bg-gray5'
let userManagement_button = '[data-menu-id$=user-management]'
let firstName_box = '#control-hooks_firstname'
let lastName_box = '#control-hooks_lastname'
let email_box = '#control-hooks_email'
let password_box = '#control-hooks_password'
let showPassword_button = '//*[@id="control-hooks"]/div[4]/div/div[2]/div/div/span/span'  //xpath
let confirmPassword_box = '#control-hooks_confirmPassword'
let showConfrimpassword_button = '//*[@id="control-hooks"]/div[5]/div/div[2]/div/div/span/span'  //xpath
let role_box = '//*[@id="control-hooks"]/div[6]/div/div[2]'     //xpath
let role_button = '.rc-virtual-list-holder-inner'
let delete_role_button = '//*[@id="control-hooks"]/div[6]/div/div[2]/div/div/div/div/div/div[1]/span/span[2]' //xpath
let project_box = '//*[@id="control-hooks"]/div[7]/div/div[2]'  //xpath
let project_button = '.rc-virtual-list-holder-inner'
let delete_project_button = '//*[@id="control-hooks"]/div[7]/div/div[2]/div/div/div/div/div/div[1]/span/span[2]' //xpath
let subbmit_button = '.ant-btn'
let delete_user_button = ':nth-child(1) > :nth-child(4) > .text-left > .ml-2'
let confirm_delete_user_button = '.ant-btn-dangerous'

//variable validate action box
let validateFirstname_box = '#control-hooks_firstname_help > .ant-form-item-explain-error'
let validateLastname_box = '#control-hooks_lastname_help > .ant-form-item-explain-error'
let validateEmail_box = '#control-hooks_email'
let validatePassword_box = '#control-hooks_password_help > .ant-form-item-explain-error'
let validateShowpassword_button = '#control-hooks_password'
let validateConfirmpassword_box = '#control-hooks_confirmPassword_help > .ant-form-item-explain-error'
let validateShowconfirmpassword_button = '#control-hooks_confirmPassword'
let validateRole_box = '#control-hooks_role_help > .ant-form-item-explain-error'
let validateProject_box = '#control-hooks_project_help > .ant-form-item-explain-error'
let validateSuccess = '.go3958317564'
let validateShow_role = '//*[@id="control-hooks"]/div[6]/div/div[2]/div/div/div/div/div/div[1]/span/span[1]' //xpath
let validateShow_project = '//*[@id="control-hooks"]/div[7]/div/div[2]/div/div/div/div/div/div[1]/span/span[1]' //xpath
let validateLogin_new_password = '.mb-3'

//variable validate element
let validateFirstname = '#control-hooks_firstname'
let validateLastname = '#control-hooks_lastname'
let validateEmail = '#control-hooks_email'
let validatePassword = '#control-hooks_password'
let validateShow_password = '//*[@id="control-hooks"]/div[4]/div/div[2]/div/div/span/span'  //xpath
let validateConfirmpassword = '#control-hooks_confirmPassword'
let validateShow_confirmpassword = '//*[@id="control-hooks"]/div[5]/div/div[2]/div/div/span/span'   //xpath
let validateRole = '//*[@id="control-hooks"]/div[6]/div/div[2]'     //xpath
let validateRole_type = '.rc-virtual-list-holder-inner'
let validateProject = '//*[@id="control-hooks"]/div[7]/div/div[2]'  //xpath


let validateSubmit = '.ant-btn'


export class EditUser {

    login(base_url: string) {
        this.url(base_url)
        //login
        loginPage.enterUsername('champ_psu@outlook.co.th')
        loginPage.enterPassword('11111111')
        loginPage.clickLogin()

        this.clickProjectfromdialog()
        this.clickUsermanagement()
        cy.wait(500)
    }

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    clickProjectfromdialog() {
        cy.get(selectProjectfromdialog_button).click()
    }

    clickUsermanagement() {
        cy.get(userManagement_button).click()
    }

    clickAdd_button() {
        cy.get(add_button).click()
    }

    clickEdit_button() {
        cy.get(edit_button).click()
    }

    clickShowpassword_button() {
        cy.xpath(showPassword_button).click()
    }

    clickShowconfirmpassword_button() {
        cy.xpath(showConfrimpassword_button).click()
    }

    clickRole_box() {
        cy.xpath(role_box).click()
    }

    clickRole_button(message: string) {
        cy.get(role_button).contains(message).click()
    }

    clickDelete_role_button() {
        cy.xpath(delete_role_button).click()
    }

    clickProject_box() {
        cy.xpath(project_box).click()
    }

    clickProject_button(message: string) {
        cy.get(project_button).contains(message).click()
    }

    clickDelete_project_button() {
        cy.xpath(delete_project_button).click()
    }

    clickSubmit() {
        cy.get(subbmit_button).click()
    }

    clickDelete_user_button() {
        cy.get(delete_user_button).click()
    }

    clickConfirm_delete_user_button(){
        cy.get(confirm_delete_user_button).click()
    }

    enterFirstname(message: string) {
        cy.get(firstName_box).type(message,{delay:0})
    }

    clearFirstname() {
        cy.get(firstName_box).clear()
    }

    enterLastname(message: string) {
        cy.get(lastName_box).type(message,{delay:0})
    }

    clearLastname() {
        cy.get(lastName_box).clear()
    }

    enterEmail(message: string) {
        cy.get(email_box).type(message,{delay:0})
    }

    clearEmail() {
        cy.get(email_box).clear()
    }

    enterPassword(message: string) {
        cy.get(password_box).type(message,{delay:0})
    }

    enterConfirmpassword(message: string) {
        cy.get(confirmPassword_box).type(message,{delay:0})
    }

    clearPassword() {
        cy.get(password_box).clear()
    }

    clearConfirmpassword() {
        cy.get(confirmPassword_box).clear()
    }

    enterRole_box(message: string) {
        cy.xpath(role_box).type(message,{delay:0})
    }

    clearRole_box() {
        cy.xpath(role_box).clear()
    }

    enterProject_box(message: string) {
        cy.xpath(project_box).type(message,{delay:0})
    }

    clearProject_box() {
        cy.xpath(project_box).clear()
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
    validateShowRole(message: string) {
        cy.xpath(validateShow_role).should('have.text', message)
    }
    validateShowProject(message: string) {
        cy.xpath(validateShow_project).should('have.text', message)
    }

    validateRole_box(message: string) {
        cy.get(validateRole_box).should('have.text', message)
    }

    validateSearch_role_box(message: string) {
        cy.get(role_button).contains(message)
    }

    vaidateProject_box(message: string) {
        cy.get(validateProject_box).should('have.text', message)
    }

    validateSearch_project_box(message: string) {
        cy.get(project_button).contains(message)
    }

    validateSuccess(message: string) {
        cy.get(validateSuccess).should('have.text', message)
    }

    validateEdit_user(message: string) {
        cy.get('tbody>tr').eq(0).find('td').eq(0).find('.item-center>div.pt-0').eq(0).should('contain', message)
    }

    validateLogin_new_password(message: string, base_url : string) {
        this.url(base_url)
        loginPage.enterUsername('test@test.com')
        loginPage.enterPassword('22222222')
        loginPage.clickLogin()
        cy.wait(500)

        cy.get(validateLogin_new_password).should('have.text', message)
    }

    editUser(fname: string, lname: string, pass: string, cfpass: string, role: string, project: string){
        cy.wait(300)
        //clear firstname
        this.clearFirstname()
        //clear lastname
        this.clearLastname()
        //clear role
        this.clickDelete_role_button()
        //clear project
        this.clickDelete_project_button()


        //enter firstname
        this.enterFirstname(fname)
        //enter lastname
        this.enterLastname(lname)

        if(pass != "" && cfpass != ""){
            //enter password
            this.enterPassword(pass)
            //enter confrim password
            this.enterConfirmpassword(cfpass)
        }
        
        // open dropdown
        this.clickRole_box()
        // select role developer
        this.clickRole_button(role)
        // close dropdown
        this.clickRole_box()

        // open dropdown
        this.clickProject_box()
        // select project accounting
        this.clickProject_button(project)
        // close dropdown
        this.clickProject_box()

        //submit
        this.clickSubmit()
    }

    resetdata() {
        this.clickDelete_user_button()
        this.clickConfirm_delete_user_button()
    }
}

export class ValidateEditUser {

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

    validateShow_password_element() {
        cy.xpath(validateShow_password).then(($body) => {
            expect($body.length).to.equal(1)
        })
    }

    validateConfirmpassword_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateConfirmpassword).length).to.equal(1)
        })
    }

    validateShow_confirmpassword_element() {
        cy.xpath(validateShow_confirmpassword).then(($body) => {
            expect($body.length).to.equal(1)
        })
    }

    validateRole_Box() {
        cy.xpath(validateRole).then(($body) => {
            expect($body.length).to.equal(1)
        })
    }

    validateRole_type(message: string) {
        cy.get(validateRole_type).contains(message)
    }

    validateProject_Box() {
        cy.xpath(validateProject).then(($body) => {
            expect($body.length).to.equal(1)
        })
    }

    validateSubmit_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSubmit).length).to.equal(1)
        })
    }

}