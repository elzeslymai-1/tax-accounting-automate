import { LoginPage } from "../Login page/Login_page"

const login = new LoginPage();

//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let incomeReport_button = '[data-menu-id$=report]'
let incomeManualreprot_button = '[data-menu-id$=submenu-income-1]'
let report_type_dropdown = '.ant-select-selector'

let report_type_fileter_monthly_button = '[title=Monthly]'
let report_type_fileter_month_button = '[title=Month]'
let report_type_fileter_quarter_button = '[title=Quarter]'
let report_type_fileter_year_button = '[title=Year]'

let start_month_button = '.ant-picker-input-active > input'
let select_start_month_picker = '.ant-picker-body'
let select_end_month_picker = '.ant-picker-body'

let select_month_button = '.ant-picker-input > input'
let select_month_picker = '.ant-picker-body'

let select_quarter_button = '.ant-picker-input > input'
let select_quarter_picker = '.ant-picker-body'

let select_year_button = '.ant-picker-input > input'
let select_year_picker = '.ant-picker-body'

let search_button = '.text-left > .ant-btn'
let view_button = ':nth-child(4) > .ant-btn'

//variable validate action box
let validate_view_monthly_date = ':nth-child(1) > :nth-child(1) > .flex > .font-medium'
let validate_view_monthly_category = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[1]/div[1]'
let validate_view_monthly_subcategory = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_monthly_item = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_monthly_amountTHB1 = '.mt-7 > :nth-child(1) > .flex > .font-semibold'
let validate_view_monthly_total = '.text-green'

let validate_view_month_date = ':nth-child(1) > :nth-child(1) > .flex > .font-medium'
let validate_view_month_category = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[1]/div[1]'
let validate_view_month_subcategory = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_month_item = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_month_amountTHB1 = '.mt-7 > :nth-child(1) > .flex > .font-semibold'
let validate_view_month_total = '.text-green'

let validate_view_quarter_date = ':nth-child(1) > :nth-child(1) > .flex > .font-medium'
let validate_view_quarter_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[1]/div[1]'
let validate_view_quarter_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[2]/div[1]'
let validate_view_quarter_subcategory1 = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_quarter_subcategory2 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_quarter_amountTHB1 = '.mt-7 > :nth-child(1) > .flex > .font-semibold'
let validate_view_quarter_amountTHB2 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_quarter_total = '.text-green'

let validate_view_year_date = ':nth-child(1) > :nth-child(1) > .flex > .font-medium'
let validate_view_year_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[1]/div[1]'
let validate_view_year_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[2]/div[1]'
let validate_view_year_category3 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[3]/div[1]'
let validate_view_year_category4 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div/div[3]/div/div[4]/div[1]'
let validate_view_year_subcategory1 = '.mt-7 > :nth-child(1) > .flex > :nth-child(1)'
let validate_view_year_subcategory2 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_year_subcategory3 = ':nth-child(3) > .flex > :nth-child(1)'
let validate_view_year_subcategory4 = ':nth-child(4) > :nth-child(2) > :nth-child(1)'

let validate_view_year_amountTHB1 = '.mt-7 > :nth-child(1) > .flex > .font-semibold'
let validate_view_year_amountTHB2 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_year_amountTHB3 = ':nth-child(3) > .flex > .font-semibold'
let validate_view_year_amountTHB4 = ':nth-child(4) > :nth-child(2) > .font-semibold'

let validate_view_year_total = '.text-green'

//variable collect cost info
let date = ''
let category1 = ''
let category2 = ''
let category3 = ''
let category4 = ''

let subcategory1 = ''
let subcategory2 = ''
let subcategory3 = ''
let subcategory4 = ''

let item = ''
let amountTHB1 = ''
let amountTHB2 = ''
let amountTHB3 = ''
let amountTHB4 = ''

let total = ''

export class IncomeReport_view {

    //Step to reset
    url(base_url: string) {
        cy.visit(base_url)
    }

    login(base_url: string) {
        this.url(base_url)
        //login
        login.enterUsername('champ_psu@outlook.co.th')
        login.enterPassword('11111111')
        login.clickLogin()
        //select project from dialog
        this.clickProjectfromdialog()
        cy.wait(300)
        //click cost report menu 
        this.clickIncome_report_button()
        this.clickIncome_manual_report_button()
        cy.wait(500)
    }

    clickProjectfromdialog() {
        cy.get(selectProjectfromdialog_button).click()
    }

    clickIncome_report_button() {
        cy.get(incomeReport_button).click()
    }

    clickIncome_manual_report_button(){
        cy.get(incomeManualreprot_button).click()
    }

    clickReport_type_dropdown() {
        cy.get(report_type_dropdown).click()
    }

    clickReport_type_filter_monthly(message: string) {
        cy.get(report_type_fileter_monthly_button).contains(message).click()
    }

    clickReport_type_filter_month() {
        cy.get(report_type_fileter_month_button).click()
    }

    clickReport_type_filter_quarter() {
        cy.get(report_type_fileter_quarter_button).click()
    }

    clickReport_type_filter_year() {
        cy.get(report_type_fileter_year_button).click()
    }

    clickStartmonth() {
        cy.get(start_month_button).click()
    }

    clickSearch() {
        cy.get(search_button).click()
    }

    clickSelect_month() {
        cy.get(select_month_button).click()
    }

    clickSelect_quarter() {
        cy.get(select_quarter_button).click()
    }

    clickSelect_year() {
        cy.get(select_year_button).click()
    }

    clickView_button() {
        cy.get(view_button).click()
    }

    enterStartmonth(message: string) {
        cy.get(select_start_month_picker).contains(message).click()
    }

    enterEndmonth(message: string) {
        cy.get(select_end_month_picker).contains(message).click()
    }

    enterMonth(message: string) {
        cy.get(select_month_picker).contains(message).click()
    }

    enterQuarter(message: string) {
        cy.get(select_quarter_picker).contains(message).click()
    }

    enterYear(message: string) {
        cy.get(select_year_picker).contains(message).click()
    }

    //Assert
    validateView_monthly(message: string,) {
        switch (message) {
            case 'Jan':
                date = '01 January - 31 January 2022'
                category1 = 'Hiring Cost'
                subcategory1 = 'Platform'
                item = 'Test Cypress'
                amountTHB1 = '111.00'
                total = '111.00'
                break
        }
        cy.get(validate_view_monthly_date).should('have.text', date)
        cy.xpath(validate_view_monthly_category).should('have.text', category1)
        cy.get(validate_view_monthly_subcategory).should('contain', subcategory1)
        cy.get(validate_view_monthly_item).should('contain', item)
        cy.get(validate_view_monthly_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_monthly_total).should('contain', total)
    }

    validateView_month(message: string,) {
        switch (message) {
            case 'Feb':
                date = '01 February - 28 February 2022'
                category1 = 'Hiring Cost'
                subcategory1 = 'Platform'
                item = 'Test cypress2'
                amountTHB1 = '222.00'
                total = '222.00'
                break
        }
        cy.get(validate_view_month_date).should('have.text', date)
        cy.xpath(validate_view_month_category).should('have.text', category1)
        cy.get(validate_view_month_subcategory).should('contain', subcategory1)
        cy.get(validate_view_month_item).should('contain', item)
        cy.get(validate_view_month_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_month_total).should('contain', total)
    }

    validateView_quarter(message: string,) {
        switch (message) {
            case 'Q2':
                date = '01 April - 30 June 2022'
                category1 = 'Dividend'
                category2 = 'Share'
                subcategory1 = 'Project Owner (Customer)'
                subcategory2 = 'Reserved Portion'
                amountTHB1 = '444.00'
                amountTHB2 = '1,221.00'
                total = '1,665.00'
                break
        }
        cy.get(validate_view_quarter_date).should('have.text', date)
        cy.xpath(validate_view_quarter_category1).should('have.text', category1)
        cy.xpath(validate_view_quarter_category2).should('have.text', category2)
        cy.get(validate_view_quarter_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_quarter_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_quarter_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_quarter_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_quarter_total).should('contain', total)
    }

    validateView_year(message: string,) {
        switch (message) {
            case '2022':
                date = '01 January - 31 December 2022'
                category1 = 'Dividend'
                category2 = 'Hiring Cost'
                category3 = 'Share'
                category4 = 'Transaction Fee'
                subcategory1 = 'Project Owner (Customer)'
                subcategory2 = 'Platform'
                subcategory3 = 'Reserved Portion'
                subcategory4 = 'Others'
                amountTHB1 = '777.00'
                amountTHB2 = '333.00'
                amountTHB3 = '3,521.00'
                amountTHB4 = '3,664.00'
                total = '8,295.00'
                break
        }

        cy.get(validate_view_year_date).should('have.text', date)
        cy.xpath(validate_view_year_category1).should('have.text', category1)
        cy.xpath(validate_view_year_category2).should('have.text', category2)
        cy.xpath(validate_view_year_category3).should('have.text', category3)
        cy.xpath(validate_view_year_category4).should('have.text', category4)
        cy.get(validate_view_year_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_year_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_year_subcategory3).should('contain', subcategory3)
        cy.get(validate_view_year_subcategory4).should('contain', subcategory4)
        cy.get(validate_view_year_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_year_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_year_amountTHB3).should('contain', amountTHB3)
        cy.get(validate_view_year_amountTHB4).should('contain', amountTHB4)
        cy.get(validate_view_year_total).should('contain', total)
    }

}
