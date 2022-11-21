import { LoginPage } from "../Login page/Login_page"
import { AddCost } from "../Create cost page/Add_cost_page";
const login = new LoginPage();
const addCost = new AddCost();
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
let end_month_button = ':nth-child(3) > input'
let select_end_month_picker = '.ant-picker-body'

let select_month_button = '.ant-picker-input > input'
let select_month_picker = '.ant-picker-body'

let select_quarter_button = '.ant-picker-input > input'
let select_quarter_picker = '.ant-picker-body'

let select_year_button = '.ant-picker-input > input'
let select_year_picker = '.ant-picker-body'

let search_button = '.text-left > .ant-btn'
let export_button = ':nth-child(2) > .ant-btn'
let view_button = ':nth-child(4) > .ant-btn'
let previous_page_button = '.gap-x-4 > :nth-child(1) > .anticon'
let item_per_page_button = '.appearance-none'
let next_page_button = '.border-gray > .anticon'

//variable validate action box
let validate_view_button = ':nth-child(1) > :nth-child(1) > .flex > .font-medium'
let validate_next_page_button = '.px-2.text-primary-black > p'

//variable validate element
let validateReport_type = '.ant-select-selector'
let validateReport_type_fileter_monthly = '[title=Monthly]'
let validateReport_type_fileter_month = '[title=Month]'
let validateReport_type_fileter_quarter = '[title=Quarter]'
let validateReport_type_fileter_year = '[title=Year]'
let validateStart_month = '.ant-picker-input-active > input'
let validateEnd_month = ':nth-child(3) > input'
let validateSelect_month = '.ant-picker-input > input'
let validateSelect_quarter = '.ant-picker-input > input'
let validateSelect_year = '.ant-picker-input > input'
let validateSearch = '.text-left > .ant-btn'
let validateExport_btn = ':nth-child(2) > .ant-btn'
let validateView = ':nth-child(1) > :nth-child(4) > .ant-btn'
let validate_page_of = '.px-2.text-primary-black > p'
let validate_previous_page = '.gap-x-4 > :nth-child(1)'
let validate_item_per_page = '.appearance-none'
let validate_next_page = '.gap-x-4 > :nth-child(3)'


export class IncomeReport {

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

    clickView_button(){
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

    selectItem_per_page_button(message : string) {
        cy.get(item_per_page_button).select(message)
    }

    clickNext_page_button() {
        cy.get(next_page_button).click()
    }

    clickPrevious_page_button() {
        cy.get(previous_page_button).click()
    }

    //Assert

    validateSearch_monthly(message: number) {

        cy.get('tbody>[class$=bg-primary-white-cyan]').then(($tbody) => {
            for (var i = 0; i < $tbody.length + 1; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).should('have.text', '0' + message + '/2022')
                message--
            }
        })
    }

    validateTotal_monthly(message: number) {
        var value = ''
        cy.get('tbody>[class$=bg-primary-white-cyan]').then(($tbody) => {
            for (var i = 0; i < $tbody.length + 1; i++) {
                switch (message) {
                    case 1: value = '111.00'
                        break
                    case 2: value = '222.00'
                        break
                    case 3: value = '333.00'
                        break
                    case 4: value = '444.00'
                        break
                    case 5: value = '555.00'
                        break
                    case 6: value = '666.00'
                        break
                    case 7: value = '777.00'
                        break
                    case 8: value = '888.00'
                        break
                    case 9: value = '999.00'
                        break
                    case 10: value = '1,000.00'
                        break
                    case 11: value = '1,100.00'
                        break
                    case 12: value = '1,200.00'
                        break

                }
                cy.get('tbody>tr').eq(i).find('td').eq(1).should('contain', value)
                message--
            }
        })
    }

    validateSearch_month(message: string) {

        switch (message) {
            case 'Jan':
                message = '01/2022'
                break
            case 'Feb':
                message = '02/2022'
                break
            case 'Mar':
                message = '03/2022'
                break
            case 'Apr':
                message = '04/2022'
                break
            case 'May':
                message = '05/2022'
                break
            case 'Jun':
                message = '06/2022'
                break
            case 'Jul':
                message = '07/2022'
                break
            case 'Aug':
                message = '08/2022'
                break
            case 'Sep':
                message = '09/2022'
                break
            case 'Oct':
                message = '10/2022'
                break
            case 'Nov':
                message = '11/2022'
                break
            case 'Dec':
                message = '12/2022'
                break
        }
        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).should('have.text', message)
            }
        })
    }

    validateTotal_month(message: string) {
        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(1).should('contain', message)
            }
        })
    }

    validateSearch_quarter(message: string) {

        switch (message) {
            case 'Q1':
                message = '01/2022'
                break
            case 'Q2':
                message = '04/2022'
                break
            case 'Q3':
                message = '07/2022'
                break
            case 'Q4':
                message = '10/2022'
                break
        }

        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).should('have.text', message)
            }
        })
    }

    validateTotal_quarter(message: string) {
        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(1).should('contain', message)
            }
        })
    }

    validateSearch_year(message: string) {

        switch (message) {
            case '2020':
                message = '01/2020'
                break
            case '2021':
                message = '01/2021'
                break
            case '2022':
                message = '01/2022'
                break
            case '2023':
                message = '01/2023'
                break
        }

        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(0).should('have.text', message)
            }
        })
    }

    validateTotal_year(message: string) {
        cy.get('tbody>[class$=p-10]').then(($tbody) => {
            for (var i = 0; i < $tbody.length; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(1).should('contain', message)
            }
        })
    }

    validateEditor(message: string) {
        cy.get('tbody>tr').then(($tbody) => {
            for (var i = 0; i < $tbody.length-1; i++) {
                cy.get('tbody>tr').eq(i).find('td').eq(2).should('contain', message)
            }
        })
    }

    validateView_button(message : string){
        cy.get(validate_view_button).should('have.text', message)
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



    resetdata() {

    }
}

export class ValidateIncomereport {

    //Assert

    validateReport_type_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateReport_type).length).to.equal(1)
        })
    }

    validateReport_type_filter_element(message: string) {
        switch (message) {
            case 'Monthly':
                cy.get('body').then(($body) => {
                    expect($body.find(validateReport_type_fileter_monthly).length).to.equal(2)

                })
                break
            case 'Month':
                cy.get('body').then(($body) => {
                    expect($body.find(validateReport_type_fileter_month).length).to.equal(1)
                })
                break
            case 'Quarter':
                cy.get('body').then(($body) => {
                    expect($body.find(validateReport_type_fileter_quarter).length).to.equal(1)
                })
                break
            case 'Year':
                cy.get('body').then(($body) => {
                    expect($body.find(validateReport_type_fileter_year).length).to.equal(1)
                })
                break
        }
    }

    validateStart_month_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateStart_month).length).to.equal(1)
        })
    }

    validateEnd_month_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateEnd_month).length).to.equal(1)
        })
    }

    validateSelect_month_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSelect_month).length).to.equal(1)
        })
    }

    validateSelect_quarter_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSelect_quarter).length).to.equal(1)
        })
    }

    validateSelect_year_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSelect_year).length).to.equal(1)
        })
    }

    validateSearch_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateSearch).length).to.equal(1)
        })
    }

    validateExport_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateExport_btn).length).to.equal(1)
        })
    }

    validateView_element() {
        cy.get('body').then(($body) => {
            expect($body.find(validateView).length).to.equal(1)
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


}