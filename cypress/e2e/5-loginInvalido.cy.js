describe('Login inválido', () => {
  it.only('Deve exibir mensagem de erro com usuário ou senha incorretos', () => {
    cy.visit('/web/index.php/auth/login');

    cy.get('input[name="username"]').type('usuarioInvalido');
    cy.get('input[name="password"]').type('senhaInvalida');
    cy.get('button[type="submit"]').click();

    // Aguarda a mensagem de erro aparecer
    cy.contains('Invalid credentials', { timeout: 5000 }).should('be.visible');
    cy.url().should('include', '/auth/login');

    // Tira um print da tela
    cy.screenshot('login-invalido');
    
  });
});
