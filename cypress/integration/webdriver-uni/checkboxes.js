///<reference types="Cypress"/>

describe("Verify Checkboxes via webdriveruni", () => {
    it("check and validate checkboxes", () => {
        cy.navigateTo_WebDriverUni_Homepage_checkbox_Page()
        

        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        
        
    });

    it("Uncheck and validate checkboxes", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
        
        // input[type='checkbox']
    });

    it("Uncheck and validate checkboxes", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-4","option-3"]).should('be.checked')
        
        
    });

    
})