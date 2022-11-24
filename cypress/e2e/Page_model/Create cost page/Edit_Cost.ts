import { LoginPage } from "../Login page/Login_page"
const loginpage = new LoginPage()

let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=cost-management]'
let Edit_button = '.p-10 > :nth-child(4) > :nth-child(1)'
   

export class EditCost {
    Login(){
        loginpage.url(Cypress.env('base_url'))
        loginpage.enterUsername('champ_psu@outlook.co.th')
        loginpage.enterPassword('11111111')
        loginpage.clickLogin()

        this.clickSelectproject()
        //select Create income menu
        this.clickCreatecostmenu()
            cy.wait(500)
    }
    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreatecostmenu() {
        cy.get(createincomeMenu_button).click()
    }
    clickEdit_button(){
        cy.get(Edit_button).click()   
    }
   
}
    