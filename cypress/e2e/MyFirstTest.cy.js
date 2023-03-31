describe('My First Test', () => {
    it('Can access the orangesource site', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.title().should('eq', "OrangeHRM")
    });

    it('Incorrect test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.title().should('eq', "OrangeHM")
    });
    
})