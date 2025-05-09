describe('Validação da lista de usuários - OrangeHRM', () => {
  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });

  it('Deve acessar Admin > User Management e validar lista de usuários', () => {
    cy.get('span').contains('Admin').click();
    cy.url().should('include', 'admin/viewSystemUsers');
    cy.get('.oxd-table-body').should('exist');
  });
});
