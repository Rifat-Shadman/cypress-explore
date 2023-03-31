/// <referece type="Cypress"/>
describe('Checks out UI elements', () => { 
    beforeEach('visiting the site',()=>{
        cy.visit('https://itera-qa.azurewebsites.net/home/automation');
    })
    it('Radio buttons working properly', () => {
        
        cy.get("input#other").should("be.disabled");
        cy.get("input#male").should("be.visible").check().should('be.checked');
        cy.get("input#female").should("be.visible").check().should('be.checked');
        cy.get("input#male").should("be.visible").should('not.be.checked');
    });
    

    it.only('Checkboxes working properly', () => {
        cy.get('#monday').should('be.visible').check().should('be.checked');

        //selecting all the checkboxes at once

        cy.get("input.form-check-input[type='checkbox']")
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
            .first().check()
            .last().check();
    });
})