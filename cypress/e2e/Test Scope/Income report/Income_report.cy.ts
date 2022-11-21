///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { IncomeReport, ValidateIncomereport } from "../../Page_model/Income report/Income_report_page"

const incomeReport = new IncomeReport()
const validateIncomeReport = new ValidateIncomereport()


describe('Income Report Page', () => {
    let base_url = 'https://dev.tax-accounting.finstable.co.th/login'

    context('Check All Element For Income Report', () => {
        //Arrange

        //set resolution
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            incomeReport.login(base_url)

            //click income report menu 
            incomeReport.clickIncome_report_button()
            incomeReport.clickIncome_manual_report_button()

            cy.wait(500)
        })

        //ACT
        it('Check => Report Type Dropdown', () => {
            //assert
            validateIncomeReport.validateReport_type_element()
        })

        //ACT
        it('Check = > Export Button', () => {
            validateIncomeReport.validateExport_element()
        })

        //ACT
        it('Check => Report Type Monthly', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateIncomeReport.validateReport_type_filter_element('Monthly')
        })

        //ACT
        it('Check => Report Type Month', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateIncomeReport.validateReport_type_filter_element('Month')
        })

        //ACT
        it('Check => Report Type Quarter', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateIncomeReport.validateReport_type_filter_element('Quarter')
        })

        //ACT
        it('Check => Report Type Year', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateIncomeReport.validateReport_type_filter_element('Year')
        })

        //ACT
        it('Check => Start Month', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            incomeReport.clickReport_type_filter_monthly('Monthly')
            cy.wait(500)
            //assert
            validateIncomeReport.validateStart_month_element()
        })

        //ACT
        it('Check => End Month', () => {
            cy.wait(500)
            //assert
            validateIncomeReport.validateStart_month_element()
        })

        //ACT
        it('Check => Select Month', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            incomeReport.clickReport_type_filter_month()
            cy.wait(500)
            //assert
            validateIncomeReport.validateSelect_month_element()
        })

        //ACT
        it('Check => Select Quarter', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            incomeReport.clickReport_type_filter_quarter()
            cy.wait(500)
            //assert
            validateIncomeReport.validateSelect_quarter_element()
        })

        //ACT
        it('Check => Select Year', () => {
            //click report type dropdown
            incomeReport.clickReport_type_dropdown()
            incomeReport.clickReport_type_filter_year()
            cy.wait(500)
            //assert
            validateIncomeReport.validateSelect_year_element()
        })

        //ACT
        it('Check => Search Button', () => {
            //assert
            validateIncomeReport.validateSearch_element()
        })

        //ACT
        it('Check => View Button', () => {
            //assert
            validateIncomeReport.validateView_element()
        })

        //ACT
        it('Check => Page...Of.. ', () => {
            //Assert
            validateIncomeReport.validatePage_of_element()
        })

        //ACT
        it('Check => Previous Page Button', () => {
            //Assert
            validateIncomeReport.validatePrevious_page_button_element()
        })

        //ACT
        it('Check => Item Per Page Button', () => {
            //Assert
            validateIncomeReport.validateItem_per_page_button_element()
        })

        //ACT
        it('Check => Next Page Button', () => {
            //Assert
            validateIncomeReport.validateNext_page_button_element()
        })

        //after
        afterEach(() => {
            cy.wait(500)
        })
    })

    context('All Income Report Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            incomeReport.login(base_url)
        })

        //ACT
        it('Search => Monthly', () => {
            //click open date picker
            incomeReport.clickStartmonth()
            //click start month
            incomeReport.enterStartmonth('Jan')
            //click end month
            incomeReport.enterEndmonth('Mar')
            //click search
            incomeReport.clickSearch();
            cy.wait(500)

            //assert
            incomeReport.validateSearch_monthly(3)    //input end month as number
            incomeReport.validateTotal_monthly(3)     //input end month as number
        })

        //ACT
        it('Search => Month', () => {
            incomeReport.login(base_url)

            //open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_month()

            //click open date picker
            incomeReport.clickSelect_month()
            //click  month
            incomeReport.enterMonth('Feb')

            //click search
            incomeReport.clickSearch();
            cy.wait(500)

            //assert
            incomeReport.validateSearch_month('Feb')
            incomeReport.validateTotal_month('222.00')
        })

        //ACT
        it('Search => Quarter', () => {
            incomeReport.login(base_url)

            //open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_quarter()

            //click open date picker
            incomeReport.clickSelect_quarter()
            //click  quarter
            incomeReport.enterQuarter('Q1')

            //click search
            incomeReport.clickSearch();
            cy.wait(500)

            //assert
            incomeReport.validateSearch_quarter('Q1')
            incomeReport.validateTotal_quarter('666.00')
        })

        //ACT
        it('Search => Year', () => {
            incomeReport.login(base_url)

            //open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_year()

            //click open date picker
            incomeReport.clickSelect_year()
            //click  year
            incomeReport.enterYear('2022')

            //click search
            incomeReport.clickSearch();
            cy.wait(500)

            //assert
            incomeReport.validateSearch_year('2022')
            incomeReport.validateTotal_year('8,295.00')
        })

        //ACT
        it('View => Monthly', () => {
            incomeReport.login(base_url)

            //click open date picker
            incomeReport.clickStartmonth()
            //click start month
            incomeReport.enterStartmonth('Mar')
            //click end monthly
            incomeReport.enterEndmonth('Mar')
            //click search
            incomeReport.clickSearch();
            cy.wait(500)
            //click view 
            incomeReport.clickView_button()
            cy.wait(500)

            //assert
            incomeReport.validateView_button('01 March - 31 March 2022')
        })

        //ACT
        it('View => Month', () => {
            incomeReport.login(base_url)

            ///open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_month()
            //click open date picker
            incomeReport.clickSelect_month()
            //click  month
            incomeReport.enterMonth('Feb')
            //click search
            incomeReport.clickSearch();
            cy.wait(500)
            //click view 
            incomeReport.clickView_button()
            cy.wait(500)

            //assert
            incomeReport.validateView_button('01 February - 28 February 2022')
        })

        it('View => Quarter', () => {
            incomeReport.login(base_url)

            //open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_quarter()

            //click open date picker
            incomeReport.clickSelect_quarter()
            //click  quarter
            incomeReport.enterQuarter('Q1')

            //click search
            incomeReport.clickSearch();
            cy.wait(500)
            //click view 
            incomeReport.clickView_button()
            cy.wait(500)

            //assert
            incomeReport.validateView_button('01 January - 31 March 2022')
        })

        //ACT
        it('View => Year', () => {
            incomeReport.login(base_url)

            //open type dropdown
            incomeReport.clickReport_type_dropdown()
            //select type filter
            incomeReport.clickReport_type_filter_year()

            //click open date picker
            incomeReport.clickSelect_year()
            //click  year
            incomeReport.enterYear('2022')

            //click search
            incomeReport.clickSearch();
            cy.wait(500)
            //click view 
            incomeReport.clickView_button()
            cy.wait(500)

            //assert
            incomeReport.validateView_button('01 January - 31 December 2022')
        })

        //ACT
        it('Check => Editor', () => {
            incomeReport.login(base_url)

            //assert
            incomeReport.validateEditor('Juggrid Chetwichian')
        })

        //ACT
        it('Click => 10 Item Per Page ', () => {
            //login
            incomeReport.login(base_url)

            //enter item
            incomeReport.selectItem_per_page_button('10') 

            //Assert
            cy.wait(500)
            incomeReport.validateItem_per_page_button(10)
        })

        //ACT
        it('Click => 15 Item Per Page ', () => {
            //login
            incomeReport.login(base_url)

            //enter item
            incomeReport.selectItem_per_page_button('15') 

            //Assert
            cy.wait(500)
            incomeReport.validateItem_per_page_button(15)
        })

        //ACT
        it('Click => 20 Item Per Page ', () => {
            //login
            incomeReport.login(base_url)

            //enter item
            incomeReport.selectItem_per_page_button('20') 

            //Assert
            cy.wait(500)
            incomeReport.validateItem_per_page_button(20)
        })

        //ACT
        it('Click => Next Page', () => {
            //login
            incomeReport.login(base_url)

            //click next page
            incomeReport.clickNext_page_button()

            //Assert
            cy.wait(500)
            incomeReport.validateNext_page_button('page 2')
        })

        //ACT
        it('Click => Previous Page', () => {
            //login
            incomeReport.login(base_url)
            //click next page
            incomeReport.clickNext_page_button()
            //click previous page
            incomeReport.clickPrevious_page_button()

            //Assert
            cy.wait(500)
            incomeReport.validatePrevious_page_button('page 1')
        })

        afterEach(() => {
            cy.wait(500)
        })

        after(() => {
            //Reset Data To Default

        })
    })
})
