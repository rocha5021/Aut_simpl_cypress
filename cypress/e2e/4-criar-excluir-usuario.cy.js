// cypress/e2e/criar-excluir-usuario.cy.test.js
describe('Testes para Criar e Excluir Usuário - OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
    });
  });

  it('Deve criar um novo usuário com sucesso', () => {
    cy.get('span').contains('Admin').should('be.visible').click();
    cy.contains('Add').should('be.visible').click();

    cy.get('input[placeholder="Type for hints..."]').type('Paul');
    cy.get('div[role="listbox"] > div').should('exist').first().click();
    cy.get('div[role="listbox"]').eq(1).contains('Admin').should('be.visible').click();
    cy.get('input[autocomplete="off"]').eq(1).type('usuario.teste');
    cy.get('input[type="password"]').eq(0).type('senha123');
    cy.get('input[type="password"]').eq(1).type('senha123');

    cy.contains('Save').should('be.visible').click();
    cy.get('.oxd-toast').should('contain', 'Success');
  });

  it('Deve excluir um usuário com sucesso', () => {
    cy.get('span').contains('Admin').should('be.visible').click();
    cy.get('.oxd-input').eq(1).type('usuario.teste');
    cy.contains('Search').should('be.visible').click();

    cy.get('.oxd-table-row .oxd-icon-button').should('exist').eq(1).click();
    cy.contains('Yes, Delete').should('be.visible').click();

    cy.get('.oxd-toast').should('contain', 'Success');
  });

  it('Deve lidar com erro ao criar usuário quando elemento está ausente', () => {
    cy.get('span').contains('Admin').should('be.visible').click();
    cy.contains('Add').should('be.visible').click();

    cy.get('input[placeholder="Type for hints..."]').type('Paul');
    cy.get('div[role="listbox"] > div').should('not.exist'); // Simula ausência do elemento
    cy.contains('Save').should('be.visible').click();

    cy.get('.oxd-toast').should('not.contain', 'Success'); // Verifica que não houve sucesso
  });

  it('Deve lidar com erro ao excluir usuário quando elemento está ausente', () => {
    cy.get('span').contains('Admin').should('be.visible').click();
    cy.get('.oxd-input').eq(1).type('usuario.inexistente');
    cy.contains('Search').should('be.visible').click();

    cy.get('.oxd-table-row .oxd-icon-button').should('not.exist'); // Simula ausência do botão
    cy.contains('Yes, Delete').should('not.exist'); // Verifica que o botão de exclusão não aparece
  });
});