describe('Navigation', () => {
  it('navigates from home to utilities', () => {
    cy.visit('/');
    cy.contains('Utilities').click();
    cy.url().should('include', '/utilities');
  });
});
