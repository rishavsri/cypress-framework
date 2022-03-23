/// <reference types="cypress" />

import AutoStore_HomePage_PO from "../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO"
import AutoStore_Haircare_PO from "../../support/pageObjects/automation-test-store/AutoStore_Haircare_PO"
describe("Add multiple items to basket", () => {

    const autoStore_Homepage_PO = new AutoStore_HomePage_PO();
    const autoStore_Haircare_PO = new AutoStore_Haircare_PO();


    before(function () {
        cy.fixture("products").then(function(data){
            globalThis.data = data;
        })
    })


    beforeEach(function()
    {
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    })

    it("Add specific items to the basket", () => {

        autoStore_Haircare_PO.addHaircareProductsToBasket();

    });
   
})