describe('footer links test', () => {
  it('should show privacy policy', () => {
    cy.visit('/')
        .get('.privacy-policy-link').click()
        .url().should('include', '/privacy-police');
  });
  it('should show credits', () => {
    cy.visit('/')
        .get('.credits-link').click()
        .url().should('include', '/credits');
  });
});