///<reference types="Cypress"/>

describe("Verify radio buttons via webdriveruni", () => {

    before("Setting up the URL and thw website",()=>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    })

    it("check specific radiobuttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
        
        
    });

    it("Validate States of specific Radio buttons", () => {
        
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
        
        
    });

    
})