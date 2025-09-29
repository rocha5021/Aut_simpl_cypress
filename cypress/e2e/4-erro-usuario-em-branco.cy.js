import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Erro ao tentar criar usuário com nome em branco', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('input[name="username"]').type('Admin');
    cy.wait(2000);
    cy.get('input[name="password"]').type('admin123');
    cy.wait(2000);
    cy.get('button[type="submit"]').click();
  });

  it('Deve mostrar erro ao tentar criar usuário com nome em branco', () => {
    cy.get('span').contains('Admin').click();
    cy.wait(2000);
    cy.url().should('include', 'admin/viewSystemUsers');
    cy.wait(2000);
    cy.contains('Add').click();
cy.wait(2000);
    // Tentando salvar sem preencher campos obrigatórios
    cy.contains('Save').click();
cy.wait(2000);
    // Valida mensagens de erro nos campos obrigatórios
    cy.get('.oxd-input-group__message').should('contain', 'Required');
    cy.wait(2000);
    cy.get('.oxd-input-group__message').should('have.length.greaterThan', 0); // Garante que há mais de um campo obrigatório
    cy.wait(2000);
    cy.screenshot('Required')

    // Logout
    UserPage.logout();

    // Valida logout
    cy.url().should('include', '/auth/login');
    cy.get('button[type="submit"]').should('be.visible');
  });
});
