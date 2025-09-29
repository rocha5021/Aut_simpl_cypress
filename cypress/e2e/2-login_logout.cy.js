import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Login, menus e logout - OrangeHRM', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.on('uncaught:exception', () => false);
  });

  it('Deve fazer login, navegar pelos menus e finalizar com logout', () => {
    // Login
    LoginPage.login('Admin', 'admin123');

    // Valida login no Dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('h6', 'Dashboard').should('be.visible');

    // Verifica e clica em Performance
    cy.contains('span', 'Performance').should('be.visible').click();
    cy.url().should('include', '/performance');

    // Verifica e clica em PIM
    cy.contains('span', 'PIM').should('be.visible').click();
    cy.url().should('include', '/pim');

    // Verifica e clica em Claim
    cy.contains('span', 'Claim').should('be.visible').click();
    cy.url().should('include', '/claim');

    // Logout
    UserPage.logout();

    // Valida logout
    cy.url().should('include', '/auth/login');
    cy.get('button[type="submit"]').should('be.visible');
  });
});
