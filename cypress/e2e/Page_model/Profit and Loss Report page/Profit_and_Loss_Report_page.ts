import { LoginPage } from "../Login page/Login_page"
import { AddCost } from "../Create cost page/Add_cost_page";
const login = new LoginPage();
const addCost = new AddCost();
//Global Variable
let selectProjectfromdialog_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let profit_Loss_button = '[data-menu-id$=profit-loss]'
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
let view_button = ':nth-child(4) > .ant-btn'

//variable validate action box
let validate_view_button = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > .font-medium'

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

//variable validate action box
let validate_view_monthly_date = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > .font-medium'

let validate_view_monthly_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[2]/div[1]'
let validate_view_monthly_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[7]/div[1]'
let validate_view_monthly_category3 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[8]/div[1]'
let validate_view_monthly_category4 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[9]/div[1]'
let validate_view_monthly_subcategory1 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_monthly_subcategory2 = ':nth-child(9) > .flex > :nth-child(1)'
let validate_view_monthly_subcategory3 = ':nth-child(10) > :nth-child(2) > :nth-child(1)'
let validate_view_monthly_subcategory4 = ':nth-child(10) > :nth-child(3) > :nth-child(1)'
let validate_view_monthly_subcategory5 = ':nth-child(11) > .flex > :nth-child(1)'
let validate_view_monthly_amountTHB1 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_monthly_amountTHB2 = ':nth-child(9) > .flex > .font-semibold'
let validate_view_monthly_amountTHB3 = ':nth-child(10) > :nth-child(2)> .font-semibold'
let validate_view_monthly_amountTHB4 = ':nth-child(10) > :nth-child(3)> .font-semibold'
let validate_view_monthly_amountTHB5 = ':nth-child(11) > .font-semibold'
let validate_view_monthly_total1 = '.mt-7 > :nth-child(3) > .font-semibold'
let validate_view_monthly_total2 = ':nth-child(11) > .font-semibold'
let validate_view_monthly_total3 = ':nth-child(14) > .font-semibold'


let validate_view_month_date = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > .font-medium'
let validate_view_month_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[2]/div[1]'
let validate_view_month_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[7]/div[1]'
let validate_view_month_subcategory1 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_month_subcategory2 = ':nth-child(9) > .flex > :nth-child(1)'
let validate_view_month_amountTHB1 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_month_amountTHB2 = ':nth-child(9) > .flex > .font-semibold'
let validate_view_month_total1 = ':nth-child(3) > .font-semibold'
let validate_view_month_total2 = ':nth-child(10) > .font-semibold'

let validate_view_quarter_date = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > .font-medium'
let validate_view_quarter_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[2]/div[1]'
let validate_view_quarter_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[7]/div[1]'
let validate_view_quarter_category3 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[8]/div[1]'
let validate_view_quarter_category4 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[9]/div[1]'
let validate_view_quarter_subcategory1 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_quarter_subcategory2 = ':nth-child(9) > .flex > :nth-child(1)'
let validate_view_quarter_subcategory3 = ':nth-child(10) > .flex > :nth-child(1)'
let validate_view_quarter_subcategory4 = ':nth-child(11) > .flex > :nth-child(1)'
let validate_view_quarter_amountTHB1 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_quarter_amountTHB2 = ':nth-child(9) > .flex > .font-semibold'
let validate_view_quarter_amountTHB3 = ':nth-child(10) > .flex > .font-semibold'
let validate_view_quarter_amountTHB4 = ':nth-child(11) > .flex > .font-semibold'
let validate_view_quarter_total1 = ':nth-child(3) > .font-semibold'
let validate_view_quarter_total2 = ':nth-child(12) > .font-semibold'

let validate_view_year_date = ':nth-child(1) > :nth-child(2) > :nth-child(1) > .flex > .font-medium'
let validate_view_year_category1 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[2]/div[1]'
let validate_view_year_category2 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[7]/div[1]'
let validate_view_year_category3 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[8]/div[1]'
let validate_view_year_category4 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[9]/div[1]'
let validate_view_year_category5 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[10]/div[1]'
let validate_view_year_category6 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[11]/div[1]'
let validate_view_year_category7 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[14]/div[1]'
let validate_view_year_category8 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[15]/div[1]'
let validate_view_year_category9 = '//*[@id="__next"]/div/div[2]/div/section/section/main/div/div[2]/div/div/div[2]/div/div[16]/div[1]'
let validate_view_year_subcategory1 = '.mt-7 > :nth-child(2) > .flex > :nth-child(1)'
let validate_view_year_subcategory2 = ':nth-child(9) > .flex > :nth-child(1)'
let validate_view_year_subcategory3 = ':nth-child(10) > .flex > :nth-child(1)'
let validate_view_year_subcategory4 = ':nth-child(11) > .flex > :nth-child(1)'
let validate_view_year_subcategory5 = ':nth-child(12) > :nth-child(2) > :nth-child(1)'
let validate_view_year_subcategory6 = ':nth-child(12) > :nth-child(3) > :nth-child(1)'
let validate_view_year_subcategory7 = ':nth-child(12) > :nth-child(4) > :nth-child(1)'
let validate_view_year_subcategory8 = ':nth-child(12) > :nth-child(5) > :nth-child(1)'
let validate_view_year_subcategory9 = ':nth-child(13) > :nth-child(2) > :nth-child(1)'
let validate_view_year_subcategory10 = ':nth-child(13) > :nth-child(3) > :nth-child(1)'
let validate_view_year_subcategory11 = ':nth-child(17) > :nth-child(5) > :nth-child(1)'
let validate_view_year_subcategory12 = ':nth-child(18) > :nth-child(2) > :nth-child(1)'
let validate_view_year_subcategory13 = ':nth-child(18) > :nth-child(3) > :nth-child(1)'
let validate_view_year_amountTHB1 = ':nth-child(2) > .flex > .font-semibold'
let validate_view_year_amountTHB2 = ':nth-child(9) > .flex > .font-semibold'
let validate_view_year_amountTHB3 = ':nth-child(10) > .flex > .font-semibold'
let validate_view_year_amountTHB4 = ':nth-child(11) > .flex > .font-semibold'
let validate_view_year_amountTHB5 = ':nth-child(12) > :nth-child(2) > .font-semibold'
let validate_view_year_amountTHB6 = ':nth-child(12) > :nth-child(3) > .font-semibold'
let validate_view_year_amountTHB7 = ':nth-child(12) > :nth-child(4) > .font-semibold'
let validate_view_year_amountTHB8 = ':nth-child(12) > :nth-child(5) > .font-semibold'
let validate_view_year_amountTHB9 = ':nth-child(13) > :nth-child(2) > .font-semibold'
let validate_view_year_amountTHB10 = ':nth-child(13) > :nth-child(3) > .font-semibold'
let validate_view_year_amountTHB11 = ':nth-child(5) > .font-semibold'
let validate_view_year_amountTHB12 = ':nth-child(18) > :nth-child(2) > .font-semibold'
let validate_view_year_amountTHB13 = ':nth-child(18) > :nth-child(3) > .font-semibold'
let validate_view_year_total1 = '.mt-7 > :nth-child(3) > .font-semibold'
let validate_view_year_total2 = ':nth-child(14) > .font-semibold'

//variable collect cost info
let date = ''
let category1 = ''
let category2 = ''
let category3 = ''
let category4 = ''
let category5 = ''
let category6 = ''
let category7 = ''
let category8 = ''
let category9 = ''
let subcategory1 = ''
let subcategory2 = ''
let subcategory3 = ''
let subcategory4 = ''
let subcategory5 = ''
let subcategory6 = ''
let subcategory7 = ''
let subcategory8 = ''
let subcategory9 = ''
let subcategory10 = ''
let subcategory11 = ''
let subcategory12 = ''
let subcategory13 = ''
let amountTHB1 = ''
let amountTHB2 = ''
let amountTHB3 = ''
let amountTHB4 = ''
let amountTHB5 = ''
let amountTHB6 = ''
let amountTHB7 = ''
let amountTHB8 = ''
let amountTHB9 = ''
let amountTHB10 = ''
let amountTHB11 = ''
let amountTHB12 = ''
let amountTHB13 = ''
let total1 = ''
let total2 = ''
let total3 = ''



export class Profit_and_Loss_Report {

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
        cy.wait(500)
        //click cost report menu 
        this.clickProfit_and_Loss_Report()
        cy.wait(500)
    }

    clickProjectfromdialog() {
        cy.get(selectProjectfromdialog_button).click()
    }

    clickProfit_and_Loss_Report() {
        cy.get(profit_Loss_button).click()
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
  
    //Assert
    validateView_monthly(message: string,) {
        switch (message) {
            case 'Jan':
                date = '01 January - 31 March 2022'
                category1 = 'Reserved Portion'
                category2 = 'Man Cost'
                category3 = 'Tech Cost'
                category4 = 'Tech Cost'
                subcategory1 = 'Share'
                subcategory2 = 'Programmer'
                subcategory3 = 'Platform'
                subcategory4 = 'Smart Contract'
                //subcategory5 = 'Smart Contract'
                amountTHB1 = '666.00'
                amountTHB2 = '333.00'
                amountTHB3 = '111.00'
                amountTHB4 = '222.00'
                //amountTHB5 = '222.00'
                total1 = '666.00'
                total2 = '666.00'
                total3 = '0'
                break
        }
        cy.get(validate_view_monthly_date).should('have.text', date)
        cy.xpath(validate_view_monthly_category1).should('have.text', category1)
        cy.xpath(validate_view_monthly_category2).should('have.text', category2)
        cy.xpath(validate_view_monthly_category3).should('have.text', category3)
        //cy.xpath(validate_view_monthly_category4).should('have.text', category4)
        cy.get(validate_view_monthly_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_monthly_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_monthly_subcategory3).should('contain', subcategory3)
        cy.get(validate_view_monthly_subcategory4).should('contain', subcategory4)
        //cy.get(validate_view_monthly_subcategory5).should('contain', subcategory5)
        cy.get(validate_view_monthly_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_monthly_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_monthly_amountTHB3).should('contain', amountTHB3)
        cy.get(validate_view_monthly_amountTHB4).should('contain', amountTHB4)
        //cy.get(validate_view_monthly_amountTHB5).should('contain', amountTHB5)
        cy.get(validate_view_monthly_total1).should('contain', total1)
        cy.get(validate_view_monthly_total2).should('contain', total2)
    }

    validateView_month(message: string,) {
        switch (message) {
            case 'Feb':
                date = '01 February 2022 - 28 February 2022'
                category1 = 'Reserved Portion'
                category2 = 'Tech Cost'
                subcategory1 = 'Share'
                subcategory2 = 'Smart Contract'
                amountTHB1 = '222.00'
                amountTHB2 = '222.00'
                total1 = '222.00'
                total2 = '222.00'
                break
        }
        cy.get(validate_view_month_date).should('have.text', date)
        cy.xpath(validate_view_month_category1).should('have.text', category1)
        cy.xpath(validate_view_month_category2).should('have.text', category2)
        cy.get(validate_view_month_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_month_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_month_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_month_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_month_total1).should('contain', total1)
        cy.get(validate_view_month_total2).should('contain', total2)
    }

    validateView_quarter(message: string,) {
        switch (message) {
            case 'Q3':
                date = '01 July - 30 September 2022'
                category1 = 'Reserved Portion'
                category2 = 'Consulting Cost'
                category3 = 'Due Diligence Cost'
                category4 = 'External Audit'
                subcategory1 = 'Share'
                subcategory2 = 'Tokenomist'
                subcategory3 = 'Operation'
                subcategory4 = 'Smart Contract Audit'
                amountTHB1 = '2,664.00'
                amountTHB2 = '888.00'
                amountTHB3 = '777.00'
                amountTHB4 = '999.00'
                total1 = '2,664.00'
                total2 = '2,664.00'
                break
        }
        cy.get(validate_view_quarter_date).should('have.text', date)
        cy.xpath(validate_view_quarter_category1).should('have.text', category1)
        cy.xpath(validate_view_quarter_category2).should('have.text', category2)
        cy.xpath(validate_view_quarter_category3).should('have.text', category3)
        cy.xpath(validate_view_quarter_category4).should('have.text', category4)
        cy.get(validate_view_quarter_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_quarter_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_quarter_subcategory3).should('contain', subcategory3)
        cy.get(validate_view_quarter_subcategory4).should('contain', subcategory4)
        cy.get(validate_view_quarter_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_quarter_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_quarter_amountTHB3).should('contain', amountTHB3)
        cy.get(validate_view_quarter_amountTHB4).should('contain', amountTHB4)
        cy.get(validate_view_quarter_total1).should('contain', total1)
        cy.get(validate_view_quarter_total2).should('contain', total2)
    }

    validateView_year(message: string,) {
        switch (message) {
            case '2022':
                date = '01 January - 31 December 2022'
                category1 = 'Reserved Portion'
                category2 = 'Consulting Cost'
                category3 = 'Due Diligence Cost'
                category4 = 'External Audit'
                category5 = 'Man Cost'
                category6 = 'Tech Cost'
                //category7 = 'Hiring Cost'
                //category8 = 'Share'
                //category9 = 'Transaction Fee'
                subcategory1 = 'Share'
                subcategory2 = 'Tokenomist'
                subcategory3 = 'Operation'
                subcategory4 = 'Smart Contract Audit'
                subcategory5 = 'Programmer'
                subcategory6 = 'Project Owner'
                subcategory7 = 'Tester'
                subcategory8 = 'UX/UI Design'
                subcategory9 = 'Platform'
                subcategory10 = 'Smart Contract'
                //subcategory11 = 'Platform'
                //subcategory12 = 'Reserved Portion'
                //subcategory13 = 'Others'
                amountTHB1 = '8,295.00'
                amountTHB2 = '888.00'
                amountTHB3 = '777.00'
                amountTHB4 = '999.00'
                amountTHB5 = '1,433.00'
                amountTHB6 = '1,644.00'
                amountTHB7 = '555.00'
                amountTHB8 = '666.00'
                amountTHB9 = '1,111.00'
                amountTHB10 = '222.00'
                //amountTHB11 = '333.00'
                //amountTHB12 = '3,521.00'
                //amountTHB13 = '3,664.00'
                total1 = '8,295.00'
                total2 = '8,295.00'
                break
        }

        cy.get(validate_view_year_date).should('have.text', date)
        cy.xpath(validate_view_year_category1).should('have.text', category1)
        cy.xpath(validate_view_year_category2).should('have.text', category2)
        cy.xpath(validate_view_year_category3).should('have.text', category3)
        cy.xpath(validate_view_year_category4).should('have.text', category4)
        cy.xpath(validate_view_year_category5).should('have.text', category5)
        cy.xpath(validate_view_year_category6).should('have.text', category6)
        //cy.xpath(validate_view_year_category7).should('have.text', category7)
        //cy.xpath(validate_view_year_category8).should('have.text', category8)
        //cy.xpath(validate_view_year_category9).should('have.text', category9)
        cy.get(validate_view_year_subcategory1).should('contain', subcategory1)
        cy.get(validate_view_year_subcategory2).should('contain', subcategory2)
        cy.get(validate_view_year_subcategory3).should('contain', subcategory3)
        cy.get(validate_view_year_subcategory4).should('contain', subcategory4)
        cy.get(validate_view_year_subcategory5).should('contain', subcategory5)
        cy.get(validate_view_year_subcategory6).should('contain', subcategory6)
        cy.get(validate_view_year_subcategory7).should('contain', subcategory7)
        cy.get(validate_view_year_subcategory8).should('contain', subcategory8)
        cy.get(validate_view_year_subcategory9).should('contain', subcategory9)
        cy.get(validate_view_year_subcategory10).should('contain', subcategory10)
        //cy.get(validate_view_year_subcategory11).should('contain', subcategory11)
        //cy.get(validate_view_year_subcategory12).should('contain', subcategory12)
        //cy.get(validate_view_year_subcategory13).should('contain', subcategory13)
        cy.get(validate_view_year_amountTHB1).should('contain', amountTHB1)
        cy.get(validate_view_year_amountTHB2).should('contain', amountTHB2)
        cy.get(validate_view_year_amountTHB3).should('contain', amountTHB3)
        cy.get(validate_view_year_amountTHB4).should('contain', amountTHB4)
        cy.get(validate_view_year_amountTHB5).should('contain', amountTHB5)
        cy.get(validate_view_year_amountTHB6).should('contain', amountTHB6)
        cy.get(validate_view_year_amountTHB7).should('contain', amountTHB7)
        cy.get(validate_view_year_amountTHB8).should('contain', amountTHB8)
        cy.get(validate_view_year_amountTHB9).should('contain', amountTHB9)
        cy.get(validate_view_year_amountTHB10).should('contain', amountTHB10)
        //cy.get(validate_view_year_amountTHB11).should('contain', amountTHB11)
        //cy.get(validate_view_year_amountTHB12).should('contain', amountTHB12)
        //cy.get(validate_view_year_amountTHB13).should('contain', amountTHB13)
        cy.get(validate_view_year_total1).should('contain', total1)
        cy.get(validate_view_year_total2).should('contain', total2)
    }
    validateView_button(message : string){
        cy.get(validate_view_button).should('have.text', message)
    }



    resetdata() {
    }
}

export class ValidateProfit_Loss_report {

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


}