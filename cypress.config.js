const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    //setup
    projectId: "idaxom",
    key : "bf04dd38-9bd4-4968-8611-dd1fe2f3e6f3",
    
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,

    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);

      // implement node event listeners here

      config.specPattern = [
        'cypress/e2e/Test Scope/Create Test Data/Add_user_data.cy.ts',
        'cypress/e2e/Test Scope/Login/*.cy.ts',
        'cypress/e2e/Test Scope/Reset password/*.cy.ts',
        'cypress/e2e/Test Scope/Forget password/*.cy.ts',
        'cypress/e2e/Test Scope/Edit profile/*.cy.ts',
        'cypress/e2e/Test Scope/Accounting/*.cy.ts',
        'cypress/e2e/Test Scope/User management/Add_user.cy.ts',
        'cypress/e2e/Test Scope/User management/Edit_user.cy.ts',
        'cypress/e2e/Test Scope/User management/User_management.cy.ts',

        //All Cost
        'cypress/e2e/Test Scope/Create cost/Add_Cost_Edit_dialog.cy.ts',
        'cypress/e2e/Test Scope/Create cost/Edit_Cost.cy.ts',
        'cypress/e2e/Test Scope/Create cost/Edit_Cost_Edit_dialog.cy.ts',
        'cypress/e2e/Test Scope/Create cost/View_cost.cy.ts',
        'cypress/e2e/Test Scope/Create Test Data/Add_cost_data.cy.ts',
        'cypress/e2e/Test Scope/Create cost/Add_cost.cy.ts',
        
        //All Income
        'cypress/e2e/Test Scope/Create_income/Add_income_Edit_dialog.cy.ts',
        'cypress/e2e/Test Scope/Create_income/Edit_income.cy.ts',
        'cypress/e2e/Test Scope/Create_income/Edit_income_Edit_dialog.cy.ts',
        'cypress/e2e/Test Scope/Create_income/View_income.cy.ts',
        'cypress/e2e/Test Scope/Create Test Data/Add_income_data.cy.ts',
        'cypress/e2e/Test Scope/Create_income/Add_income.cy.ts',


        //All Report
        //cost report
        'cypress/e2e/Test Scope/Cost report/Cost_report.cy.ts',
        'cypress/e2e/Test Scope/Cost report/Cost_report_view.cy.ts',
        //income report
        'cypress/e2e/Test Scope/Income report/Income_report.cy.ts',
        'cypress/e2e/Test Scope/Income report/Income_report_view.cy.ts',
        //profit&loss report
        'cypress/e2e/Test Scope/Profit and Loss Report/Profit_and_Loss_Report.cy.ts',

        //Reset Data to Default
        'cypress/e2e/Test Scope/Create Test Data/Delete_test_data.cy.ts'
        
      ]
      
      return config
    },
  },
});

