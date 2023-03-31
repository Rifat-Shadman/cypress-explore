describe('handling dropdown menus', () => {
    beforeEach('visiting the site',()=>{
        
    })
    it('selects dropdown', () => {
        cy.visit('https://www.zoho.com/commerce/free-demo.html');
        cy.get('#zcf_address_country').select('Bangladesh').should('have.value', 'Bangladesh');
    });

    it('dummyticket site checks typing under dropdown', () => {
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type("Kazakhstan{enter}")
        cy.get('#select2-billing_country-container').should('have.text', "Kazakhstan")
    });

    it('Auto suggested dropdown working perfectly',()=>{
        cy.visit('https://www.wikipedia.org/');
        cy.get('#searchInput').type("Bangladesh");
        cy.get('.suggestion-title').contains('Bangladesh').click();
        cy.title().should('contain', 'Bangladesh')
        cy.url().should('eq', 'https://en.wikipedia.org/wiki/Bangladesh')

    });


    it.only('Dynamic drpodown from google',()=>{
        cy.visit('https://www.google.com');
        cy.get("input[name='q']").type('bangladesh');
        cy.get('div.wM6W7d>span').should('have.length', '12')
        cy.get('div.wM6W7d>span').each(($el, index, $list) =>{
            if($el.text() == "bangladesh vs ireland"){
                cy.wrap($el.click());
            }
        });
        cy.get("input[name='q']").should('have.value', "bangladesh vs ireland");
    })

})