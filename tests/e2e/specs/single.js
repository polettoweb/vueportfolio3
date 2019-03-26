import { watchFile } from "fs";

describe('Single', () => {
    it('Testing single blog', () => {
        cy.visit('/blog/first')
        cy.wait(500)
        cy.expect('h1').to.exist
        cy.get('h1').should('not.be.empty')
        cy.expect('[data-cy="data-cy="blog__container"]').to.exist
        cy.get('[data-cy="blog__container"]').find('img').should('be.visible')
        cy.get('[data-cy="blog__container"]').find('p').should('not.be.empty')
        cy.expect('[data-cy="button__back"]').to.exist
        cy.get('[data-cy="button__back"]').should('have.attr', 'href', '/blog')
    })
})