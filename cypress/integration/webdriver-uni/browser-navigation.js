///<reference types="Cypress"/>

describe("Validate webdriveruni homepage link", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr','target').click({force:true})

        cy.url().should('include','contactus')
        cy.go('back')
        cy.reload()

        cy.go('forward')
        cy.url().should('include','contactus')
        
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','Login-Portal')
    });

   
})