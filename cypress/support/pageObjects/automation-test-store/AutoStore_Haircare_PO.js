///<reference types="Cypress"/>

class AutoStore_Haircare_PO{

    addHaircareProductsToBasket(){
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click().debug()
    }

}

export default AutoStore_Haircare_PO;

//Debugeer helps to freeze the execution and then it helps to see console logs and 