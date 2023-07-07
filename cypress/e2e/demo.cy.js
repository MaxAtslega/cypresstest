describe('shortcut website', () => {
  it('should cookie', () => {
    cy.visit('https://shor.tcut.de/de').get('.save-button').click();
  });

  it('should select to english', () => {
    cy.visit('https://shor.tcut.de/de')
    cy.get('.save-button').click();

    cy.get('#mobileLanguage .language-switcher').click()
    cy.location('pathname').should('eq', '/en')
  });

  it('should banner image', () => {
    cy.visit('https://shor.tcut.de/de')
    cy.get('.save-button').click();

    cy.get('.mobile-Banner').scrollIntoView()
        .should('be.visible')
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img[0].naturalHeight).to.be.greaterThan(0);
        })
  });

  it('contact form', () => {
    cy.visit('https://shor.tcut.de/de')
    cy.get('.save-button').click();

    cy.get('.form-load-button').click().should("have.text", "X")
    cy.get('#contact_fullName').type('Max Mustermann')
  });

  it('should footer', () => {
    cy.visit('https://shor.tcut.de/de')
    cy.get('.save-button').click();

    cy.get('.footer-container a[href*="/de/datenschutz"]').click()
    cy.location('pathname').should('eq', '/de/datenschutz')
  });
});