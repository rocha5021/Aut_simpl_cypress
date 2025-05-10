describe.only('Erro ao tentar criar usuário com nome em branco', () => {
  before(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
  });

  it.only('Deve mostrar erro ao tentar criar usuário com nome em branco', () => {
    cy.get('span').contains('Admin').click();
    cy.contains('Add').click();

    // Tentando salvar sem preencher campos obrigatórios
    cy.contains('Save').click();

    // Valida mensagens de erro nos campos obrigatórios
    cy.get('.oxd-input-group__message').should('contain', 'Required');
  });
});
