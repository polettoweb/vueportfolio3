describe('Footer', () => {
    it('Testing footer', () => {
        cy.visit('/')
        cy.expect('[data-cy="footer__copy"]').to.exist
        cy.expect('[data-cy="socials__container"]').to.exist
        cy.get('[data-cy="socials__container"]').find('a').should('be.visible')
    })
})