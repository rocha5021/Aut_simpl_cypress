import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Login no OrangeHRM', () => {
  beforeEach(() => {
    LoginPage.visit();
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Evita falha por erro não tratado
    });
  });

  it('Deve realizar login com sucesso', () => {
    LoginPage.login('Admin', 'admin123');
    cy.wait(2000);
    cy.url().should('include', '/dashboard');
    cy.wait(2000);
    cy.get('h6').should('contain', 'Dashboard');

    // Logout
        UserPage.logout();
    
        // Valida logout
        cy.url().should('include', '/auth/login');
        cy.get('button[type="submit"]').should('be.visible');
  });

  it('Deve mostrar erro ao tentar logar sem preencher os campos', () => {
  // Visita página de login
  LoginPage.visit();

  // Clica no botão de login sem digitar nada
  cy.get('button[type="submit"]').click();

  // Valida mensagens de erro nos dois campos
  cy.get('.oxd-input-field-error-message')
    .should('contain', 'Required')
    .and('be.visible');

  // Confirma que ainda está na tela de login
  cy.url().should('include', '/auth/login');
});

});
