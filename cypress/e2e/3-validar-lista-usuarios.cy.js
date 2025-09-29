import LoginPage from '../Pages/LoginPage';
import UserPage from '../Pages/UserPage';

describe('Validação da lista de usuários - OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // impede que o teste falhe por erros não tratados
    });
    cy.get('input[name="username"]').type('Admin');
    cy.wait(2000);
    cy.get('input[name="password"]').type('admin123');
    cy.wait(2000);
    cy.get('button[type="submit"]').click();
  });

  it('Deve acessar Admin > User Management e validar lista de usuários', () => {
    cy.get('span').contains('Admin').click();
    cy.wait(2000);
    cy.url().should('include', 'admin/viewSystemUsers');
    cy.wait(2000);
    cy.get('.oxd-table-body').should('exist').and('be.visible');
    cy.wait(2000);
    cy.get('.oxd-table-body .oxd-table-row').should('have.length.greaterThan', 0); // Garante que há usuários na lista
    cy.wait(2000);

     // Rola até o fim
    cy.get('.oxd-table-body .oxd-table-row').last().scrollIntoView();
    cy.wait(1000); // pequena pausa para visualizar o scroll

    // Logout
        UserPage.logout();
        cy.url().should('include', '/auth/login');
        cy.get('button[type="submit"]').should('be.visible');
  });
});
