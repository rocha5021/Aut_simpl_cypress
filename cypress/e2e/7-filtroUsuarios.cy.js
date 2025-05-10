describe.only('Testes para Criar e Excluir Usuário - OrangeHRM', () => {
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
});

describe.only('Desafio 6 - Filtro de busca de usuários', () => {
  beforeEach(() => {
    cy.login(); // Comando customizado para login
    cy.visit('/web/index.php/admin/viewSystemUsers');
  });

  it.only('Deve filtrar usuários pelo campo User Role', () => {
    cy.get('div.oxd-select-text').eq(0).click(); // User Role
    cy.contains('Admin').click();
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-table-row').should('exist'); // Verifica se há resultados
  });
});
