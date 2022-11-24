///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { CostReport_view } from "../../Page_model/Cost report/Cost_report_view_page"
const costReport_view = new CostReport_view()



describe('Cost Report View Page', () => {
    let base_url = Cypress.env('base_url')

    context.only('Cost Report View Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            costReport_view.login(Cypress.env('base_url'))
        })

        //ACT
        it('Check View => Monthly', () => {
            //click open date picker
            costReport_view.clickStartmonth()
            //click start month
            costReport_view.enterStartmonth('Jan')
            //click end month
            costReport_view.enterEndmonth('Jan')
            //click search
            costReport_view.clickSearch();
            cy.wait(500)
            //click view
            costReport_view.clickView_button()
            cy.wait(500)
            //assert
            costReport_view.validateView_monthly('Jan')
        })

        //ACT
        it('Check View => Month', () => {
            costReport_view.login(base_url)

            //open type dropdown
            costReport_view.clickReport_type_dropdown()
            //select type filter
            costReport_view.clickReport_type_filter_month()

            //click open date picker
            costReport_view.clickSelect_month()
            //click  month
            costReport_view.enterMonth('Feb')

            //click search
            costReport_view.clickSearch();
            cy.wait(500)
            //click view
            costReport_view.clickView_button()
            cy.wait(500)

            //assert
            costReport_view.validateView_month('Feb')

        })

        //ACT
        it('Check View => Quarter', () => {
            costReport_view.login(base_url)

            //open type dropdown
            costReport_view.clickReport_type_dropdown()
            //select type filter
            costReport_view.clickReport_type_filter_quarter()

            //click open date picker
            costReport_view.clickSelect_quarter()
            //click  quarter
            costReport_view.enterQuarter('Q2')

            //click search
            costReport_view.clickSearch();
            cy.wait(500)

            //click view
            costReport_view.clickView_button()
            cy.wait(500)

            costReport_view.validateView_quarter('Q2')
        })

        //ACT
        it('Check View => Year', () => {
            costReport_view.login(base_url)

            //open type dropdown
            costReport_view.clickReport_type_dropdown()
            //select type filter
            costReport_view.clickReport_type_filter_year()

            //click open date picker
            costReport_view.clickSelect_year()
            //click  year
            costReport_view.enterYear('2022')

            //click search
            costReport_view.clickSearch();
            cy.wait(500)

            //click view
            costReport_view.clickView_button()
            cy.wait(500)

            costReport_view.validateView_year('2022')

        })

        afterEach(() => {
            cy.wait(500)
        })

        after(() => {
            //Reset Data To Default

        })
    })
})
