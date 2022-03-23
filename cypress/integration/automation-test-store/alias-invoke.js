/// <reference types="cypress" />

describe("Alias and Invoke", () => {
    it("Validate a specific Haircare product", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt',5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });

    it("Validate product Thymbnail", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(".thumbnail").as('productThumbnail')
        cy.get("@productThumbnail").should('have.length','16')
        cy.get("@productThumbnail").find('.productcart').invoke('attr','title').should('include','Add to Cart')
        

        
    });
   
})