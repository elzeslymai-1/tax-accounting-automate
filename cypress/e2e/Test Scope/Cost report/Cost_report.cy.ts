///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { CostReport, ValidateCostreport } from "../../Page_model/Cost report/Cost_report_page"

const costReport = new CostReport()
const validateCostReport = new ValidateCostreport()


describe('Cost Report Page', () => {
    let base_url = 'https://dev.tax-accounting.finstable.co.th/login'

    context('Check All Element For Cost Report', () => {
        //Arrange

        //set resolution
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            costReport.login(base_url)

            //click cost report menu 
            costReport.clickCost_report_button()
            cy.wait(500)
        })

        //ACT
        it('Check => Report Type Dropdown', () => {
            //assert
            validateCostReport.validateReport_type_element()
        })

        //ACT
        it('Check = > Export Button', () => {
            validateCostReport.validateExport_element()
        })

        //ACT
        it('Check => Report Type Monthly', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateCostReport.validateReport_type_filter_element('Monthly')
        })

        //ACT
        it('Check => Report Type Month', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateCostReport.validateReport_type_filter_element('Month')
        })

        //ACT
        it('Check => Report Type Quarter', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateCostReport.validateReport_type_filter_element('Quarter')
        })

        //ACT
        it('Check => Report Type Year', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            validateCostReport.validateReport_type_filter_element('Year')
        })

        //ACT
        it('Check => Start Month', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            costReport.clickReport_type_filter_monthly('Monthly')
            cy.wait(500)
            //assert
            validateCostReport.validateStart_month_element()
        })

        //ACT
        it('Check => End Month', () => {
            cy.wait(500)
            //assert
            validateCostReport.validateStart_month_element()
        })

        //ACT
        it('Check => Select Month', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            costReport.clickReport_type_filter_month()
            cy.wait(500)
            //assert
            validateCostReport.validateSelect_month_element()
        })

        //ACT
        it('Check => Select Quarter', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            costReport.clickReport_type_filter_quarter()
            cy.wait(500)
            //assert
            validateCostReport.validateSelect_quarter_element()
        })

        //ACT
        it('Check => Select Year', () => {
            //click report type dropdown
            costReport.clickReport_type_dropdown()
            costReport.clickReport_type_filter_year()
            cy.wait(500)
            //assert
            validateCostReport.validateSelect_year_element()
        })

        //ACT
        it('Check => Search Button', () => {
            //assert
            validateCostReport.validateSearch_element()
        })

        //ACT
        it('Check => View Button', () => {
            //assert
            validateCostReport.validateView_element()
        })

        //ACT
        it('Check => Page...Of.. ', () => {
            //Assert
            validateCostReport.validatePage_of_element()
        })

        //ACT
        it('Check => Previous Page Button', () => {
            //Assert
            validateCostReport.validatePrevious_page_button_element()
        })

        //ACT
        it('Check => Item Per Page Button', () => {
            //Assert
            validateCostReport.validateItem_per_page_button_element()
        })

        //ACT
        it('Check => Next Page Button', () => {
            //Assert
            validateCostReport.validateNext_page_button_element()
        })

        //after
        afterEach(() => {
            cy.wait(500)
        })
    })

    context('All Cost Report Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            costReport.login(base_url)
        })

        //ACT
        it('Search => Monthly', () => {
            //click open date picker
            costReport.clickStartmonth()
            //click start month
            costReport.enterStartmonth('Jan')
            //click end month
            costReport.enterEndmonth('Mar')
            //click search
            costReport.clickSearch();
            cy.wait(500)

            //assert
            costReport.validateSearch_monthly(3)    //input end month as number
            costReport.validateTotal_monthly(3)     //input end month as number
        })

        //ACT
        it('Search => Month', () => {
            costReport.login(base_url)

            //open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_month()

            //click open date picker
            costReport.clickSelect_month()
            //click  month
            costReport.enterMonth('Feb')

            //click search
            costReport.clickSearch();
            cy.wait(500)

            //assert
            costReport.validateSearch_month('Feb')
            costReport.validateTotal_month('222.00')
        })

        //ACT
        it('Search => Quarter', () => {
            costReport.login(base_url)

            //open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_quarter()

            //click open date picker
            costReport.clickSelect_quarter()
            //click  quarter
            costReport.enterQuarter('Q1')

            //click search
            costReport.clickSearch();
            cy.wait(500)

            //assert
            costReport.validateSearch_quarter('Q1')
            costReport.validateTotal_quarter('666.00')
        })

        //ACT
        it('Search => Year', () => {
            costReport.login(base_url)

            //open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_year()

            //click open date picker
            costReport.clickSelect_year()
            //click  year
            costReport.enterYear('2022')

            //click search
            costReport.clickSearch();
            cy.wait(500)

            //assert
            costReport.validateSearch_year('2022')
            costReport.validateTotal_year('8,295.00')
        })

        //ACT
        it('View => Monthly', () => {
            costReport.login(base_url)

            //click open date picker
            costReport.clickStartmonth()
            //click start month
            costReport.enterStartmonth('Mar')
            //click end monthly
            costReport.enterEndmonth('Mar')
            //click search
            costReport.clickSearch();
            cy.wait(500)
            //click view 
            costReport.clickView_button()
            cy.wait(500)

            //assert
            costReport.validateView_button('01 March - 31 March 2022')
        })

        //ACT
        it('View => Month', () => {
            costReport.login(base_url)

            ///open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_month()
            //click open date picker
            costReport.clickSelect_month()
            //click  month
            costReport.enterMonth('Feb')
            //click search
            costReport.clickSearch();
            cy.wait(500)
            //click view 
            costReport.clickView_button()
            cy.wait(500)

            //assert
            costReport.validateView_button('01 February - 28 February 2022')
        })

        it('View => Quarter', () => {
            costReport.login(base_url)

            //open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_quarter()

            //click open date picker
            costReport.clickSelect_quarter()
            //click  quarter
            costReport.enterQuarter('Q1')

            //click search
            costReport.clickSearch();
            cy.wait(500)
            //click view 
            costReport.clickView_button()
            cy.wait(500)

            //assert
            costReport.validateView_button('01 January - 31 March 2022')
        })

        //ACT
        it('View => Year', () => {
            costReport.login(base_url)

            //open type dropdown
            costReport.clickReport_type_dropdown()
            //select type filter
            costReport.clickReport_type_filter_year()

            //click open date picker
            costReport.clickSelect_year()
            //click  year
            costReport.enterYear('2022')

            //click search
            costReport.clickSearch();
            cy.wait(500)
            //click view 
            costReport.clickView_button()
            cy.wait(500)

            //assert
            costReport.validateView_button('01 January - 31 December 2022')
        })

        //ACT
        it('Check => Editor', () => {
            costReport.login(base_url)

            //assert
            costReport.validateEditor('Juggrid Chetwichian')
        })

        //ACT
        it('Click => 10 Item Per Page ', () => {
            //login
            costReport.login(base_url)

            //enter item
            costReport.selectItem_per_page_button('10') 

            //Assert
            cy.wait(500)
            costReport.validateItem_per_page_button(10)
        })

        //ACT
        it('Click => 15 Item Per Page ', () => {
            //login
            costReport.login(base_url)

            //enter item
            costReport.selectItem_per_page_button('15') 

            //Assert
            cy.wait(500)
            costReport.validateItem_per_page_button(15)
        })

        //ACT
        it('Click => 20 Item Per Page ', () => {
            //login
            costReport.login(base_url)

            //enter item
            costReport.selectItem_per_page_button('20') 

            //Assert
            cy.wait(500)
            costReport.validateItem_per_page_button(20)
        })

        //ACT
        it('Click => Next Page', () => {
            //login
            costReport.login(base_url)

            //click next page
            costReport.clickNext_page_button()

            //Assert
            cy.wait(500)
            costReport.validateNext_page_button('page 2')
        })

        //ACT
        it('Click => Previous Page', () => {
            //login
            costReport.login(base_url)
            //click next page
            costReport.clickNext_page_button()
            //click previous page
            costReport.clickPrevious_page_button()

            //Assert
            cy.wait(500)
            costReport.validatePrevious_page_button('page 1')
        })

        afterEach(() => {
            cy.wait(500)
        })

        after(() => {
            //Reset Data To Default

        })
    })
})
