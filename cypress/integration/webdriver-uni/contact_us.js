/// <reference types="cypress" />

import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import Conatct_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO"


describe("Test Contact Us form via WebdriverUni", () => {

    Cypress.config('defaultCommandTimeout',20000)
    //explicity loading the timeout for this describe

    const contact_us_po = new Conatct_Us_PO();
    before(function() {
        cy.fixture('example').then(function(data) {
            cy.viewport(550,750);
            globalThis.data = data;
        })
    })

    beforeEach(function(){
        const homepage_PO = new HomePage_PO();
        homepage_PO.visitHomepage()
        homepage_PO.clickOn_ContactUs_Button();

    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        
        contact_us_po.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'How can I learn Cypress?', 'h1', 'Thank You for your Message!');
        // cy.pause() // it helps to pause and debug the system
        
        
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

        contact_us_po.contactForm_Submission(data.first_name, data.last_name, " ", 'How can I learn Cypress?', 'body', 'Error: Invalid email address');
        // cy.wait(10000) // This command waits for 10 secs
        
    });
})

// cy.webDriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'How can I learn Cypress?', 'h1', 'Thank You for your Message!')