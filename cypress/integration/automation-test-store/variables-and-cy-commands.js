/// <reference types="cypress" />




describe("Verifying variables,cypress commands and Jquery commands", () => {
    it("Navigating to specific product page", () => {
        cy.visit("https://www.automationteststore.com/");
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare").click()

        
    });
    it("Navigating to specific product page", () => {
        cy.visit("https://www.automationteststore.com/");
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        
        cy.get('.maintext').then(($headerText)=>{
            const headerText = $headerText.text()
            cy.log("Found header Text : "+headerText)
            expect(headerText).is.eq('Makeup')
        })
        
        
    });

    it.only("Validate Properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //use cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
        
        //Jquery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
        })

        //Embedded Commands 

        cy.get('#field_11').then(fnText=>{
            cy.log(fnText.text())
            cy.log(fnText)
        })
    });
   
})