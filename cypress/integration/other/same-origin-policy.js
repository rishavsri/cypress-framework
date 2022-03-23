/// <reference types="cypress" />

describe("Cypress Web Security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.visit("https://www.google.com")
    });

    it("validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });
   
})