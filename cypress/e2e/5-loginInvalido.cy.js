import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Login inválido', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });

  it('Deve exibir mensagem de erro com usuário ou senha incorretos', () => {
    cy.get('input[name="username"]').type('Qadanasa');
    cy.wait(2000);
    cy.get('input[name="password"]').type('40028922');
    cy.wait(2000);
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.contains('Invalid credentials', { timeout: 5000 }).should('be.visible');
    cy.wait(2000);
    cy.url().should('include', '/auth/login');
    cy.wait(2000);
    cy.screenshot('login-invalido');
  });
});
