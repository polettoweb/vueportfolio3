describe('Header', () => {
    it('Testing header and main menu', () => {
        cy.viewport('iphone-6')
        cy.visit('/')
        cy.expect('[data-cy="logo"]').to.exist
        cy.expect('[data-cy="burger"]').to.exist
        cy.get('[data-cy="burger"]').should('be.visible')
        cy.get('[data-cy="burger"]').trigger('click')
        cy.get('[data-cy="cross"]').should('be.visible')
        cy.get('[data-cy="overlay"]').should('be.visible')
        cy.wait(500)
        cy.get('[data-cy="cross"]').trigger('click')
        cy.get('[data-cy="overlay"]').should('not.to.be.visible')
    })
})