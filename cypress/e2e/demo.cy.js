describe('login and register', () => {
  it('should login', () => {
    cy.visit('/')
        .get('.btn-login').click()
        .url().should('include', '/login');
  });
  it('should register', () => {
    cy.visit('/')
        .get('.btn-register').click()
        .url().should('include', '/register');
  });
});