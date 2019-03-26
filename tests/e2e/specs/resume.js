describe('Resume', () => {
    it('Testing resume', () => {
        cy.visit('/resume')
        cy.wait(500)
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="experience__intro"]').to.exist
        cy.get('[data-cy="experience__intro"]').should('not.be.empty')
        cy.expect('[data-cy="topic"]').to.exist
        cy.get('[data-cy="topic"]').should('not.be.empty')
        cy.expect('[data-cy="skill"]').to.exist
        cy.get('[data-cy="skill"]').should('not.be.empty')
        cy.expect('[data-cy="expcard"] > p').to.exist
        cy.get('[data-cy="expcard"]').find('p').should('not.be.empty')
    })
})