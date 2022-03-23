///<reference types="Cypress"/>

describe("Test Datepicker via webdrievruni", () => {
    it("Select date from the datepicker", () => {
        cy.visit("https://webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr','target').click({force:true})

        var date = new Date();
        date.setDate(date.getDate()) 
        cy.log(date.getDate()) // get the current day

        var date = new Date();
        date.setDate(date.getDate() + 5)
        cy.log(date.getDate())

    });

    
})