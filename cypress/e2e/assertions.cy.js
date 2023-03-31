Cypress.config('pageLoadTimeout', 100000)
context('Assertions of two types', () => {
    beforeEach(()=>{
        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    )
    it('Implicit Assertions', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // implicit asserions will contain the 'should' and 'end' keywords
        cy.url().should('include', "orangehrm");
        cy.url().should('contain', "opensource-demo.orangehrmlive.com")
        cy.url().should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url()
            .should('include', "orangehrm")
            .and('contain', "opensource-demo.orangehrmlive.com")
            .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

 
    
        cy.title().should('include', "Orange").and("contain", "HRM").and("eq", "OrangeHRM")
    });

    it('logo validation', () => {
        cy.get('.orangehrm-login-branding >img').should('exist').and('be.visible');
        cy.get("input[placeholder='Username']").type("Admin").should('have.value', 'Admin'); //typing username and assertion

        cy.get("input[placeholder='Password']").type("admin123").should('have.value','admin123').should('not.have.text') // typing password assertion
        //clicking submit
        cy.get("button[type='submit']").click();
    });

    // it('explicit assertion', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.get("input[placeholder='Username']").type("Admin");
    //     cy.get("input[placeholder='Password']").type("admin123");
    //     cy.get("button[type='submit']").click();
    // });
})