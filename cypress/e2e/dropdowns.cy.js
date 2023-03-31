describe('handling dropdown menus', () => {
    beforeEach('visiting the site',()=>{
        
    })
    it('selects dropdown', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.get('#zcf_address_country').select('Bangladesh').should('have.value', 'Bangladesh');
    });

    it.only('dummyticket site checks typing under dropdown', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type("Kazakhstan{enter}")
        cy.get('#select2-billing_country-container').should('have.text', "Kazakhstan")
    });
})