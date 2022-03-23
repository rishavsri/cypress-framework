
/// <reference types="cypress" />


describe('Hooks', () => {
    before(()=>{
        cy.log("Runs before all the tests in the block")
    })

    beforeEach(()=>{
        cy.log("Runs before each tests in the block")
    })

    after(()=>{
        cy.log("Runs after all the tests in the block")
    })

    afterEach(()=>{
        cy.log("Runs after each tests in the block")
    })

    
    it('Example Test1', ()=> {
        cy.log("Exmaple Test 1")
    });

    it('Example Test2', ()=> {
        cy.log("Exmaple Test 2")
    });
        
});


// cypress comes pre bundled with Mocha


// there are four types of Hooks 
// before, after, beforeeach, aftereach