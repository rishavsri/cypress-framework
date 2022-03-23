/// <reference types="cypress" />

describe("inspect Automation Test Store Items Using chain of commands", () => {
    it("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
           console.log("Selected the following item :"+itemHeaderText.text())
            
        })
    });

    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
})