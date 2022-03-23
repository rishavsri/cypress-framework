///<reference types="Cypress"/>


class HomePage_PO{

    visitHomepage(){
        cy.visit(Cypress.env("webdriveruni_homepage"),{timeout:60000}) // directly loading the page timeout
    }

    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout:8000}) //explicit timeout to a given command
    }

}

export default HomePage_PO;