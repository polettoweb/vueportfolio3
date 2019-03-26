describe('Portfolio', () => {
    it('Testing portfolio', () => {
        cy.visit('/portfolio')
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="portfolio__img"]').to.exist
        cy.get('[data-cy="portfolio__img"]').find('img').should('be.visible')
    })
})