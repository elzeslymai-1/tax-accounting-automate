///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { IncomeReport_view } from "../../Page_model/Income report/Income_report_view_page"
const incomeReport_view = new IncomeReport_view()



describe('Income Report View Page', () => {
    let base_url = Cypress.env('base_url')

    context('Income Report View Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            incomeReport_view.login(base_url)
        })

        //ACT
        it('Check View => Monthly', () => {
            //click open date picker
            incomeReport_view.clickStartmonth()
            //click start month
            incomeReport_view.enterStartmonth('Jan')
            //click end month
            incomeReport_view.enterEndmonth('Jan')
            //click search
            incomeReport_view.clickSearch();
            cy.wait(500)
            //click view
            incomeReport_view.clickView_button()
            cy.wait(500)
            //assert
            incomeReport_view.validateView_monthly('Jan')
        })

        //ACT
        it('Check View => Month', () => {
            incomeReport_view.login(base_url)

            //open type dropdown
            incomeReport_view.clickReport_type_dropdown()
            //select type filter
            incomeReport_view.clickReport_type_filter_month()

            //click open date picker
            incomeReport_view.clickSelect_month()
            //click  month
            incomeReport_view.enterMonth('Feb')

            //click search
            incomeReport_view.clickSearch();
            cy.wait(500)
            //click view
            incomeReport_view.clickView_button()
            cy.wait(500)

            //assert
            incomeReport_view.validateView_month('Feb')

        })

        //ACT
        it('Check View => Quarter', () => {
            incomeReport_view.login(base_url)

            //open type dropdown
            incomeReport_view.clickReport_type_dropdown()
            //select type filter
            incomeReport_view.clickReport_type_filter_quarter()

            //click open date picker
            incomeReport_view.clickSelect_quarter()
            //click  quarter
            incomeReport_view.enterQuarter('Q2')

            //click search
            incomeReport_view.clickSearch();
            cy.wait(500)

            //click view
            incomeReport_view.clickView_button()
            cy.wait(500)

            incomeReport_view.validateView_quarter('Q2')
        })

        //ACT
        it('Check View => Year', () => {
            incomeReport_view.login(base_url)

            //open type dropdown
            incomeReport_view.clickReport_type_dropdown()
            //select type filter
            incomeReport_view.clickReport_type_filter_year()

            //click open date picker
            incomeReport_view.clickSelect_year()
            //click  year
            incomeReport_view.enterYear('2022')

            //click search
            incomeReport_view.clickSearch();
            cy.wait(500)

            //click view
            incomeReport_view.clickView_button()
            cy.wait(500)

            incomeReport_view.validateView_year('2022')

        })

        afterEach(() => {
            cy.wait(500)
        })

        after(() => {
            //Reset Data To Default

        })
    })
})
