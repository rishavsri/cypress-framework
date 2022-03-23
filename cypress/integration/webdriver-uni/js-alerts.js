///<reference types="Cypress"/>

describe("Handle js alerts", () => {
    it("Confirm js alerts conatins the correct Text", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button1').click({force:true})

        //manually handling the alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am an alert box!')
        })        
    });

    
    it('Validate JS confirm alert box works correctly when clicking OK', function() {

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button4').click({force:true})

        cy.on('window:alert',(str)=>{
            return true;
        })
        
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });
        
    it('Validate JS confirm alert box works correctly when clicking Cancel', function() {

        cy.visit("https://webdriveruniversity.com/")
        cy.get('#popup-alerts').invoke('removeAttr','target').click({force:true})

        cy.get('#button4').click({force:true})

        cy.on('window:confirm',(str)=>{
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
       
    });
   
})