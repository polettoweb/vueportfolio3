describe('Workshop', () => {
    it('Testing workshop', () => {
        cy.visit('/workshop')
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="workshop__box"]').to.exist
        cy.get('[data-cy="workshop__box"]').find('img').should('be.visible')
        cy.expect('[data-cy="workshop__link-text"]').to.exist
        cy.get('[data-cy="workshop__link-text"]').should('not.be.empty')
        cy.expect('[data-cy="workshop__tag"]').to.exist
        cy.get('[data-cy="workshop__tag"]').should('not.be.empty')
        cy.get('[data-cy="workshop__links-www"]').should('have.attr', 'href').should('include', '/')
        cy.get('[data-cy="workshop__links-git"]').should('have.attr', 'href').should('include', '/')
    })
})