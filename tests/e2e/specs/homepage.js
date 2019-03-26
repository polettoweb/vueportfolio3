// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.expect('h1').to.exist
    cy.get('h1').should('not.be.empty')
    cy.expect('[data-cy="tilt"]').to.exist
    cy.get('[data-cy="tilt"]').find('img').should('be.visible')
    cy.expect('[data-cy="home__text"]').to.exist
    cy.get('[data-cy="home__text"]').find('p').should('not.to.be.empty')
    cy.expect('[data-cy="keywords__container"]').to.exist
    cy.get('[data-cy="keywords__container"]').should('be.visible')
  })
})
