import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Login no OrangeHRM', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Evita falha por erro não tratado
    });
  });

   it('Deve mostrar erro ao tentar logar sem preencher os campos', () => {
  LoginPage.visit();
  LoginPage.login('Admin', 'admin123');
    cy.wait(2000);
  cy.get('button[type="submit"]').click();
  cy.get('.oxd-input-field-error-message').should('contain', 'Required').and('be.visible');

  cy.url().should('include', '/auth/login');
});

  it('Deve realizar login com sucesso', () => {
    LoginPage.login('Admin', 'admin123');
    cy.wait(2000);
    cy.url().should('include', '/dashboard');
    cy.wait(2000);
    cy.get('h6').should('contain', 'Dashboard');

    // Logout
        UserPage.logout();
        cy.url().should('include', '/auth/login');
        cy.get('button[type="submit"]').should('be.visible');
  });

});
