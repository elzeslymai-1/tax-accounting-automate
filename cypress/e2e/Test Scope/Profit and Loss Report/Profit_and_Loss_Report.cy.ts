///<reference types="cypress" />
///<reference types = 'cypress-xpath'/>
import { Profit_and_Loss_Report,ValidateProfit_Loss_report } from "../../Page_model/Profit and Loss Report page/Profit_and_Loss_Report_page"
import { AddCost } from "../../Page_model/Create cost page/Add_cost_page"
import { Createincome } from "../../Page_model/Create_income/Add_income" 

const createincome = new Createincome()
const Addcost = new AddCost()
const Profit_LossReport = new Profit_and_Loss_Report()
const ValidateProfit_LossReport = new ValidateProfit_Loss_report()


describe('Profit and Loss Report Test', () => {
    let base_url = Cypress.env('base_url')

    context.skip('Check All Element For Cost Report', () => {
        //Arrange

        //set resolution
        beforeEach(() => {
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            Profit_LossReport.login(base_url)

            //click cost report menu 
            Profit_LossReport.clickProfit_and_Loss_Report()
            cy.wait(500)
        })

        //ACT
        it('Check => Report Type Dropdown', () => {
            //assert
            ValidateProfit_LossReport.validateReport_type_element()
        })

        //ACT
        it('Check => Report Type Monthly', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateReport_type_filter_element('Monthly')
        })

        //ACT
        it('Check => Report Type Month', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateReport_type_filter_element('Month')
        })

        //ACT
        it('Check => Report Type Quarter', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateReport_type_filter_element('Quarter')
        })

        //ACT
        it('Check => Report Type Year', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateReport_type_filter_element('Year')
        })

        //ACT
        it('Check => Start Month', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            Profit_LossReport.clickReport_type_filter_monthly('Monthly')
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateStart_month_element()
        })

        //ACT
        it('Check => End Month', () => {
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateStart_month_element()
        })

        //ACT
        it('Check => Select Month', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            Profit_LossReport.clickReport_type_filter_month()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateSelect_month_element()
        })

        //ACT
        it('Check => Select Quarter', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            Profit_LossReport.clickReport_type_filter_quarter()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateSelect_quarter_element()
        })

        //ACT
        it('Check => Select Year', () => {
            //click report type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            Profit_LossReport.clickReport_type_filter_year()
            cy.wait(500)
            //assert
            ValidateProfit_LossReport.validateSelect_year_element()
        })

        //ACT
        it('Check => Search Button', () => {
            //assert
            ValidateProfit_LossReport.validateSearch_element()
        })

       
        //after
        afterEach(() => {
            cy.wait(500)
        })
    })

    context('Profit and Loss Report Test', () => {
        //Arrange
        beforeEach(() => {
            //cy.wait(500)
            cy.viewport(1920, 1080)
        })

        before(() => {
            cy.viewport(1920, 1080)
            //login
            Profit_LossReport.login(base_url)
            
        })

        //ACT
        it('Search => Monthly', () => {
            //click open date picker
            Profit_LossReport.clickStartmonth()
            //click start month
            Profit_LossReport.enterStartmonth('Jan')
            //click end month
            Profit_LossReport.enterEndmonth('Mar')
            //click search
            Profit_LossReport.clickSearch();
            cy.wait(500)

            //assert
            ValidateProfit_LossReport.validateExport_element() // check export button
            Profit_LossReport.validateView_monthly('Jan')
            
        })

        //ACT
        it('Search => Month', () => {
            Profit_LossReport.login(base_url)

            //open type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            //select type filter
            Profit_LossReport.clickReport_type_filter_month()

            //click open date picker
            Profit_LossReport.clickSelect_month()
            //click  month
            Profit_LossReport.enterMonth('Feb')

            //click search
            Profit_LossReport.clickSearch();
            cy.wait(500)

            //assert
            ValidateProfit_LossReport.validateExport_element() // check export button
            Profit_LossReport.validateView_month('Feb')
            
        })

        //ACT
        it('Search => Quarter', () => {
            Profit_LossReport.login(base_url)

            //open type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            //select type filter
            Profit_LossReport.clickReport_type_filter_quarter()

            //click open date picker
            Profit_LossReport.clickSelect_quarter()
            //click  quarter
            Profit_LossReport.enterQuarter('Q3')

            //click search
            Profit_LossReport.clickSearch();
            cy.wait(500)

            //assert
            ValidateProfit_LossReport.validateExport_element() // check export button
            Profit_LossReport.validateView_quarter('Q3')
            
        })

        //ACT
        it('Search => Year', () => {
            Profit_LossReport.login(base_url)

            //open type dropdown
            Profit_LossReport.clickReport_type_dropdown()
            //select type filter
            Profit_LossReport.clickReport_type_filter_year()

            //click open date picker
            Profit_LossReport.clickSelect_year()
            //click  year
            Profit_LossReport.enterYear('2022')

            //click search
            Profit_LossReport.clickSearch();
            cy.wait(500)

            //assert
            ValidateProfit_LossReport.validateExport_element() // check export button
            Profit_LossReport.validateView_year('2022')
            
        })

        afterEach(() => {
            cy.wait(500)
        })

        after(() => {
            
        })
    })
})
