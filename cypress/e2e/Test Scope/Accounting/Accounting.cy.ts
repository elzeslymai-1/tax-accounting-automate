///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { Accounting, ValidateAccounting } from "../../Page_model/Accounting/Accounting_page"
import { LoginPage } from "../../Page_model/Login page/Login_page"

const accounting = new Accounting()
const validateAccounting = new ValidateAccounting()
const loginPage = new LoginPage()


describe('Accounting Page', () => {
    let base_url = 'https://dev.tax-accounting.finstable.co.th/login'

    context('Check All Element For Accounting Role', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            accounting.url(base_url)
            //login
            loginPage.enterUsername('accounting@cypress.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
        })
        
        //ACT
        it('Select Project Dialog', () => {
            //Assert
            cy.wait(2000)
            validateAccounting.validateSelectproject_dialog()
        })

        //ACT
        it('User Logo', () => {
            // select project
            accounting.clickProjectfromdialog()
            cy.wait(400)
            //Assert
            validateAccounting.validateLogo()
        })

        //ACT
        it('User Name', () => {
            //Assert
            validateAccounting.validateUser_name()
        })

        //ACT
        it('User Role', () => {
            //Assert
            validateAccounting.validateUser_role()
        })

        //ACT
        it('Select Project Dropdown', () => {
            //Assert
            validateAccounting.validateSelectproject_dropdown()
        })

        //ACT
        it('Cost Report Munu', () => {
            //Assert
            validateAccounting.validateCostreport_menu()
        })

        //ACT
        it('Income Report Dropdown', () => {
            //Assert
            validateAccounting.validateIncomereport_dropdown()
        })

        //ACT
        it('Income Report Manual', () => {
            //click income report menu
            accounting.clickIncomereport_menu()

            //Assert
            cy.wait(500)
            validateAccounting.validateIncomereport_manual()
        })

        //ACT
        it('Income Report Auto', () => {
            //Assert
            validateAccounting.validateIncomereport_auto()
        })

        //ACT
        it('Profit & Loss Report', () => {
            //Assert
            validateAccounting.validateProfit_loss()
        })

        afterEach(()=>{
            cy.wait(400)
        })
    })

    context('Check All Element For Developer Role', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            accounting.url(base_url)
            //login
            loginPage.enterUsername('Developer@cypress.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
        })
        
        //ACT
        it('Select Project Dialog', () => {
            //Assert
            cy.wait(2000)
            validateAccounting.validateSelectproject_dialog()
        })

        //ACT
        it('User Logo', () => {
            // select project
            accounting.clickProjectfromdialog()
            cy.wait(400)
            //Assert
            validateAccounting.validateLogo()
        })

        //ACT
        it('User Name', () => {
            //Assert
            validateAccounting.validateUser_name()
        })

        //ACT
        it('User Role', () => {
            //Assert
            validateAccounting.validateUser_role()
        })

        //ACT
        it('Select Project Dropdown', () => {
            //Assert
            validateAccounting.validateSelectproject_dropdown()
        })

        //ACT
        it('Cost Report Munu', () => {
            //Assert
            validateAccounting.validateCostreport_menu()
        })

        //ACT
        it('Income Report Dropdown', () => {
            //Assert
            validateAccounting.validateIncomereport_dropdown()
        })

        //ACT
        it('Income Report Manual', () => {
            //click income report menu
            accounting.clickIncomereport_menu()

            //Assert
            cy.wait(500)
            validateAccounting.validateIncomereport_manual()
        })

        //ACT
        it('Income Report Auto', () => {
            //Assert
            validateAccounting.validateIncomereport_auto()
        })

        //ACT
        it('Profit & Loss Report', () => {
            //Assert
            validateAccounting.validateProfit_loss()
        })

        //ACT
        it('Create Cost Menu', () => {
            //Assert
            validateAccounting.validateCreatecost_menu()
        })

        //ACT
        it('Create Income Menu', () => {
            //Assert
            validateAccounting.validateCreateincome_menu()
        })

        afterEach(()=>{
            cy.wait(400)
        })
    })

    context('Check All Element For Super-Admin Role', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            accounting.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
        })
        
        //ACT
        it('Select Project Dialog', () => {
            //Assert
            cy.wait(2000)
            validateAccounting.validateSelectproject_dialog()
        })

        //ACT
        it('User Logo', () => {
            // select project
            accounting.clickProjectfromdialog()
            cy.wait(400)
            //Assert
            validateAccounting.validateLogo()
        })

        //ACT
        it('User Name', () => {
            //Assert
            validateAccounting.validateUser_name()
        })

        //ACT
        it('User Role', () => {
            //Assert
            validateAccounting.validateUser_role()
        })

        //ACT
        it('Select Project Dropdown', () => {
            //Assert
            validateAccounting.validateSelectproject_dropdown()
        })

        //ACT
        it('Cost Report Munu', () => {
            //Assert
            validateAccounting.validateCostreport_menu()
        })

        //ACT
        it('Income Report Dropdown', () => {
            //Assert
            validateAccounting.validateIncomereport_dropdown()
        })

        //ACT
        it('Income Report Manual', () => {
            //click income report menu
            accounting.clickIncomereport_menu()

            //Assert
            cy.wait(500)
            validateAccounting.validateIncomereport_manual()
        })

        //ACT
        it('Income Report Auto', () => {
            //Assert
            validateAccounting.validateIncomereport_auto()
        })

        //ACT
        it('Profit & Loss Report', () => {
            //Assert
            validateAccounting.validateProfit_loss()
        })

        //ACT
        it('Create Cost Menu', () => {
            //Assert
            validateAccounting.validateCreatecost_menu()
        })

        //ACT
        it('Create Income Menu', () => {
            //Assert
            validateAccounting.validateCreateincome_menu()
        })

        //ACT
        it('User Management Menu', () => {
            //Assert
            validateAccounting.validateUsermanagement_menu()
        })

        afterEach(()=>{
            cy.wait(400)
        })
    })

    context('Check All Element For Account Menu (top-right)', () => {
        //Arrange

        //set resolution
        beforeEach(()=>{
            cy.viewport(1920,1080)
        })

        before(() => {
            cy.viewport(1920,1080)
            accounting.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
        })
        
        //ACT
        it('Account Menu => Logo', () => {
            
            cy.wait(2000)
            //select project from dialog
            accounting.clickProjectfromdialog()

            //click account menu
            accounting.clickAccountmenu()

            cy.wait(500)
            //Assert
            validateAccounting.validateAccountmenu_logo()
        })

        //ACT
        it('Account Menu => Name', () => {
            //Assert
            validateAccounting.validateAccountmenu_username()

        })

        //ACT
        it('Account Menu => Email', () => {
            //Assert
            validateAccounting.validateAccountmenu_email()

        })

        //ACT
        it('Account Menu => Role', () => {
            //Assert
            validateAccounting.validateAccountmenu_role()

        })

        //ACT
        it('Account Menu => Account Management', () => {
            //Assert
            validateAccounting.validateAccountmenu_account_management()

        })

        //ACT
        it('Account Menu => Logout', () => {
            //Assert
            validateAccounting.validateAccountmenu_logout()
        })
        
        afterEach(()=>{
            cy.wait(400)
        })
    })

    context('All Accounting Test', () => {
        //Arrange
        beforeEach(()=>{
            cy.viewport(1920,1080)
            accounting.url(base_url)
            //login
            loginPage.enterUsername('champ_psu@outlook.co.th')
            loginPage.enterPassword('11111111')
            loginPage.clickLogin()
        })

        //ACT
        it('Close Dialog', () => {
            //Click close dialog
            accounting.clickClostdialog()

            //Assert
            accounting.validateClosedialog('Please select project')
        })

        //ACT
        it('Select Project From Dialog', () => {
            
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Assert
            accounting.validateSelectproject_dialog('Dashboard')
            
        })
        
        //ACT
        it('Dashboard Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Click dashboard menu
            accounting.clickDashboard_menu()
            
            //Assert
            accounting.validateDashboard_menu('Dashboard')
            
        })

        //ACT
        it('Cost Report Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()
            
            //Click cost report menu
            accounting.clickCostreport_menu()
            
            //Assert
            accounting.validateCostreport_menu('Cost')
            
        })

        //ACT
        it('Manual Report Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()
            
            //Click income report menu
            accounting.clickIncomereport_menu()
            //Click manual income report menu
            accounting.clickManualreport_menu()

            //Assert
            accounting.validateManualincomereport_menu('Income')
            
        })

        //ACT
        it('Auto Report Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Click auto income report menu
            accounting.clickIncomereport_menu()
            //Click auto income report menu
            accounting.clickAutoreport_menu()

            //Assert
            accounting.validateAutoincomereport_menu('Auto Income')
        })

        //ACT
        it('Profit & Loss Report Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Click auto income report menu
            accounting.clickProfit_loss_menu()

            //Assert
            accounting.validateProfit_loss_report_menu('Profit and Loss')
        })

        //ACT
        it('Create Cost Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Click create cost menu
            accounting.clickCreatecost_menu()

            //Assert
            accounting.validateCreatecost_menu('Cost Manangement')
        })

        //ACT
        it('Create Income Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()

            //Click create income menu
            accounting.clickCreateincome_menu()

            //Assert
            accounting.validateCreateincome_menu('Income Manangement')
        })

        //ACT
        it('User Management Menu', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()
            //Click user management menu
            accounting.clickUsermanagement_menu()

            //Assert
            accounting.validateUsermanagement_menu('User Manangement')
        })

        //ACT
        it('Account Menu => Manage Account', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()
            //click manage account menu
            accounting.clickAccountmenu()
            //Click manage account menu
            accounting.clickAccountmenu_manageaccount()

            //Assert
            accounting.validateAccountmenu_manageaccount('Edit User Profile')
        })

        //ACT
        it('Account Menu => Logout', () => {
            //select project from dialog
            accounting.clickProjectfromdialog()
            //click logout  menu
            accounting.clickAccountmenu()
            //Click logout menu
            accounting.clickAccountmenu_logout()

            //Assert
            accounting.validateAccountmenu_logout('Welcome to Accounting')
        })

        afterEach(()=>{
            
        })

    })
})
