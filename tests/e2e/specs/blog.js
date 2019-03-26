describe('Blog', () => {
    it('Testing blog', () => {
        cy.visit('/blog')
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="blog-cat__post"]').to.exist
        cy.get('[data-cy="blog-cat__post"]').find('img').should('be.visible')
        cy.get('[data-cy="blog-cat__post"]').find('h3').should('not.be.empty')
        cy.get('[data-cy="blog-cat__post"]').find('p').should('not.be.empty')
    })
})