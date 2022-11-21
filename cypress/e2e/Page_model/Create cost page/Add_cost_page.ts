import { LoginPage } from "../Login page/Login_page"
const loginpage = new LoginPage()
let selectProject_button = '.ant-modal-body > .flex-col > :nth-child(2)'
let createincomeMenu_button = '[data-menu-id$=cost-management]'
let add1_button = '//*[@id="control-hooks"]/div/div[8]/button' //xpath
let submit_button = '.mt-2 > .flex > .ant-btn'
let view1_button = ':nth-child(4) > :nth-child(2) > span'
let add_button = '.flex > .ant-btn > span'
let Add_button = '.flex > .ml-2 > span'
let submitcopy_button = '.text-xl > .ant-btn > span'
let delete_button = ':nth-child(1) > :nth-child(8) > .ml-2 > .ant-image > .ant-image-img'
let confirmdrlete = '.ant-btn-dangerous'
let next_year = '.ant-picker-header-super-next-btn'
let selectMonth_textbox = ':nth-child(1) > .flex > .pl-4 > .ant-picker > .ant-picker-input > input'
let selectMonth_copy = ':nth-child(4) > .flex > .text-xl > .ant-picker > .ant-picker-input > input'
let category_textbox = '#control-hooks_category'
let subcategory_textbox = '#control-hooks_subCategory'
let type_textbox = '#control-hooks_type'
let item_textbox = '#control-hooks_item'
let amount_textbox = '#control-hooks_amount'
let currency_textbox = '#control-hooks_currency'
let amountTHB_textbox = '#control-hooks_amountThb'
let item_per_page_button = '.appearance-none'
let next_page_button = '.border-gray > .anticon'
let previous_page_button = '.gap-x-4 > :nth-child(1) > .anticon'
let category_type_dropdown = '#control-hooks_category'
let subcategory_type_dropdown = '#control-hooks_subCategory'
let type_dropdown = '#control-hooks_type'
let category_type_fileter_Techcost_button = '[title="Tech Cost"]'
let category_type_fileter_Mancost_button = '[title="Man Cost"]'
let category_type_fileter_Duediligencecost_button = '[title="Due Diligence Cost"]'
let category_type_fileter_Consultingcost_button = '[title="Consulting Cost"]'
let category_type_fileter_Externalaudit_button = '[title="External Audit"]'
let subcategory_type_fileter_platform_button = '[title="Platform"]'
let subcategory_type_fileter_SmartContract_button = '[title="Smart Contract"]'
let subcategory_type_fileter_ProjectOwner_button = '[title="Project Owner"]'
let subcategory_type_fileter_Programmer_button = '[title="Programmer"]'
let subcategory_type_fileter_UXUIDesign_button = '[title="UX/UI Design"]'
let subcategory_type_fileter_Tester_button = '[title="Tester"]'
let subcategory_type_fileter_Operation_button = '[title="Operation"]'
let subcategory_type_fileter_Tokenomist_button = '[title="Tokenomist"]'
let subcategory_type_fileter_SmartContractAudit_button = '[title="Smart Contract Audit"]'
let type_fileter_Onetime_button = '[title="One-time"]'
let type_fileter_Daily_button = '[title="Daily"]'
let type_fileter_Monthly_button = '[title="Monthly"]'
let type_fileter_Annually_button = '[title="Annually"]'

//variable validate action box
let validate_next_page_button = '.px-2.text-primary-black > p'

//validateFail
let validateFail_Category = '#control-hooks_category_help > .ant-form-item-explain-error'
let validateFail_Subcategory = '#control-hooks_subCategory_help > .ant-form-item-explain-error'
let validateFail_Type = '#control-hooks_type_help > .ant-form-item-explain-error'
let validateFail_Item = '.ant-show-help-item-appear'
let validateFail_Amount = '#control-hooks_amount_help > .ant-form-item-explain-error'
let validateFail_Currency = '#control-hooks_currency_help > .ant-form-item-explain-error'
let validateFail_Amountthb = '#control-hooks_amountThb_help > .ant-form-item-explain-error'
let validateFail_Month = '.go2072408551'
let validateSuccess = '.go2072408551'
let Validate_AmountThb = 'tbody > :nth-child(1) > :nth-child(7) > div'
let Validate_Amount = 'tbody > :nth-child(1) > :nth-child(5) > div'
let Validatetext_subcategory ='.mt-7 > :nth-child(1) > :nth-child(2) > :nth-child(1)'
let Validatetext_amountthb1 = '.mt-7 > :nth-child(1) > .flex > .font-semibold'
let Validatetext_amountthb2 = '.text-green'

//Validate Element
let Validate_category = '.w-full > tbody > :nth-child(1) > :nth-child(1) > div'
let Validate_Subcategory = '.w-full > tbody > :nth-child(1) > :nth-child(2) > div'
let Validate_categorytype = '.w-full > tbody > :nth-child(1) > :nth-child(3) > div'
let Validate_Item = '.w-full > tbody > :nth-child(1) > :nth-child(4) > div'
let Validate_categoryamount = '.w-full > tbody > :nth-child(1) > :nth-child(5) > div'
let Validate_categorycurrency = '.w-full > tbody > :nth-child(1) > :nth-child(6) > div'
let Validate_categoryamountthb = '.w-full > tbody > :nth-child(1) > :nth-child(7) > div'


export class AddCost {



    Login() {
        loginpage.url('https://dev.tax-accounting.finstable.co.th/login')
        loginpage.enterUsername('champ_psu@outlook.co.th')
        loginpage.enterPassword('11111111')
        loginpage.clickLogin()

        this.clickSelectproject()
        //select Create income menu
        this.clickCreatecostmenu()
        cy.wait(500)
    }
    Delete_Creat_cost() {
        // select Create income menu
        this.clickCreatecostmenu()
        cy.wait(500)
        for (var i = 0; i < 20; i++) {
            cy.contains('Delete').click()
            cy.get('.ant-btn-dangerous').click()
            cy.wait(500)
        }
    }
    clickSelectproject() {
        cy.get(selectProject_button).click()
    }

    clickCreatecostmenu() {
        cy.get(createincomeMenu_button).click()
    }
    clickAddbutton() {
        cy.xpath(add1_button).click()
    }
    clickSubmit() {
        cy.get(submit_button).click()
    }

    clickview1() {
        cy.get(view1_button).click()
    }
    clickAddbutton1() {
        cy.get(add_button).click()
    }
    clickAdd() {
        cy.get(Add_button).click()
    }
    clickDelete() {
        cy.get(delete_button).click()
    }
    clicksubmitcopy() {
        cy.get(submitcopy_button).click()
    }
    
    clickConfirmdelete() {
        cy.get(confirmdrlete).click()
    }

    clickCategory_type_dropdown() {
        cy.get(category_type_dropdown).click()
    }

    clickSubcategory_type_dropdown() {
        cy.get(subcategory_type_dropdown).click()
    }

    clicktype_dropdown() {
        cy.get(type_dropdown).click()
    }
    clicknextyear() {
        cy.get(selectMonth_textbox).click()
        cy.get(next_year).click()
    }

    enterMonth(monthy: string) {
        cy.get(selectMonth_textbox).click()
        cy.contains(monthy).click()
    }
    

    enterMonth_copy(month: string) {
        cy.get(selectMonth_copy).click()
        cy.contains(month).click()
    }
    
    enterYear(year: string) {
        cy.get(selectMonth_textbox).click()
        cy.contains(year).click()
        cy.contains('2021').click()
    }

    enterCategory(category: string) {
        cy.get(category_textbox).click()
        cy.wait(500)
        cy.contains(category).click()

    }

    enterSubcategory(subcategory: string) {
        cy.get(subcategory_textbox).click()
        cy.wait(1000)
        cy.contains(subcategory).click()
    }

    enterType(type: string) {
        cy.get(type_textbox).click()
        cy.wait(500)
        cy.contains(type).click()

    }

    enterItem(item: string) {
        cy.get(item_textbox).type(item,{delay:0})
    }

    clearItem() {
        cy.get(item_textbox).clear()
    }

    enterAmount(amount: string) {
        cy.get(amount_textbox).type(amount,{delay:0})
    }
    clearAmount() {
        cy.get(amount_textbox).clear()
    }

    enterCurrency(currency: string) {
        cy.get(currency_textbox).type(currency,{delay:0})
    }

    clearCurrency() {
        cy.get(currency_textbox).clear()
    }

    enterAmount_THB(amountTHB: string) {
        cy.get(amountTHB_textbox).type(amountTHB,{delay:0})
    }

    clearAmount_THB() {
        cy.get(amountTHB_textbox).clear()
    }
    validateFail(validateFail: string) {
        cy.get(validateFail_Category).should('have.text', validateFail)
    }

    validateCategory(validateFail: string) {
        cy.get(validateFail_Category).should('have.text', validateFail)
    }
    validateSub_category(validateFail: string) {
        cy.get(validateFail_Subcategory).should('have.text', validateFail)
    }
    validateType(validateFail: string) {
        cy.get(validateFail_Type).should('have.text', validateFail)
    }
    validateItem(validateFail: string) {
        cy.get(validateFail_Item).should('have.text', validateFail)
    }
    validateAmount(validateFail: string) {
        cy.get(validateFail_Amount).should('have.text', validateFail)
    }
    validateFailCurrency(validateFail: string) {
        cy.get(validateFail_Currency).should('have.text', validateFail)
    }
    validateAmountthb(validateFail: string) {
        cy.get(validateFail_Amountthb).should('have.text', validateFail)
    }

    validateFail1(validateFail1: String) {
        cy.get(validateFail_Month).should('have.text', validateFail1)
    }

    validateSuccess(validateFail1: String) {
        cy.get(validateSuccess).should('have.text', validateFail1)
    }

    ValidateAmountThb(ValidateAmountThb: String) {
        cy.get(Validate_AmountThb).should('contain', ValidateAmountThb)
    }

    ValidateAmount(ValidateAmount: String) {
        cy.get(Validate_Amount).should('contain', ValidateAmount)
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
    validatetext_category(validate: string) {
        cy.get(Validatetext_subcategory).should('have.text', validate)
    }
    validatetext_amountthb1(validate: string) {
        cy.get(Validatetext_amountthb1).should('contain', validate)
    }
    validatetext_amountthb2(validate: string) {
        cy.get(Validatetext_amountthb2).should('contain', validate)
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
    validatecategory_type_filter_element(message: string) {
        switch (message) {
            case 'Techcost':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Techcost_button).length).to.equal(1)

                })
                break
            case 'Mancost':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Mancost_button).length).to.equal(1)
                })
                break
            case 'Duediligencecost':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Duediligencecost_button).length).to.equal(1)
                })
                break
            case 'Consultingcost':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Consultingcost_button).length).to.equal(1)
                })
                break
            case 'Externalaudit':
                cy.get('body').then(($body) => {
                    expect($body.find(category_type_fileter_Externalaudit_button).length).to.equal(1)
                })
                break
            
        }
    }

    validateSubcategory_type_filter_element(message: string) {
        switch (message) {
            case 'Platform':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_platform_button).length).to.equal(1)

                })
                break
            case 'SmartContract':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_SmartContract_button).length).to.equal(1)
                })
                break
            case 'ProjectOwner':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_ProjectOwner_button).length).to.equal(1)
                })
                break
            case 'Programmer':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_Programmer_button).length).to.equal(1)
                })
                break
            case 'UXUIDesign':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_UXUIDesign_button).length).to.equal(1)
                })
                break
            case 'Tester':
                cy.get('body').then(($body) => {
                    expect($body.find(subcategory_type_fileter_Tester_button).length).to.equal(1)
                })
                break
            case 'Operation':
            cy.get('body').then(($body) => {
                expect($body.find(subcategory_type_fileter_Operation_button).length).to.equal(1)
            })
                break
            case 'Tokenomist':
            cy.get('body').then(($body) => {
                expect($body.find(subcategory_type_fileter_Tokenomist_button).length).to.equal(1)
            })
                break
            case 'SmartContractAudit':
            cy.get('body').then(($body) => {
                expect($body.find(subcategory_type_fileter_SmartContractAudit_button).length).to.equal(1)
            })
                break
        }
    }

    validatetype_filter_element(message: string) {
        switch (message) {
            case 'Onetime':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Onetime_button).length).to.equal(1)

                })
                break
            case 'Daily':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Daily_button).length).to.equal(1)
                })
                break
            case 'Monthly':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Monthly_button).length).to.equal(1)
                })
                break
            case 'Annually':
                cy.get('body').then(($body) => {
                    expect($body.find(type_fileter_Annually_button).length).to.equal(1)
                })
                break
            
        }
    }
    
    validateAddincome_success(a: string, b: string, c: string, d: string, e: string, f: string, g: string) {
        cy.get(Validate_category).should('have.text', a)
        cy.get(Validate_Subcategory).should('contain', b)
        cy.get(Validate_categorytype).should('contain', c)
        cy.get(Validate_Item).should('contain', d)
        cy.get(Validate_categoryamount).should('contain', e)
        cy.get(Validate_categorycurrency).should('contain', f)
        cy.get(Validate_categoryamountthb).should('contain', g)
    }

    createcost(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string) {
        
        cy.wait(300)
        this.clickAdd()
        this.enterMonth(a)
        this.enterCategory(b)
        this.enterSubcategory(c)
        this.enterType(d)
        this.enterItem(e)
        this.enterAmount(f)
        this.enterCurrency(g)
        this.enterAmount_THB(h)
        this.clickAddbutton1()
        cy.wait(300)
        this.clickSubmit()
        cy.wait(500)
    }

    createcost_before(a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string){
        cy.wait(300)
        this.clickAdd()
        this.enterYear('2022')
        this.enterMonth(a)
        this.enterCategory(b)
        this.enterSubcategory(c)
        this.enterType(d)
        this.enterItem(e)
        this.enterAmount(f)
        this.enterCurrency(g)
        this.enterAmount_THB(h)
        this.clickAddbutton1()
        cy.wait(300)
        this.clickSubmit()
        cy.wait(500)
    }
}

