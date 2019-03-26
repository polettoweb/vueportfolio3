describe('PortfolioItem', () => {
    it('Testing portfolio item', () => {
        cy.visit('/portfolio/mag')
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="portfolio-detail__image"]').to.exist
        cy.get('[data-cy="portfolio-detail__image"]').should('be.visible')
        cy.get('[data-cy="portfolio-detail__description"]').find('a').should('not.be.empty')
        cy.get('[data-cy="portfolio-detail__description"]').find('p').should('not.be.empty')
        cy.get('[data-cy="portfolio-detail__description"]').find('span').should('not.be.empty')
    })
})