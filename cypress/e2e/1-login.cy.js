describe('Login no OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('Deve realizar login com sucesso', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.wait(20000);
    

    cy.url().should('include', '/dashboard');
    cy.get('h6').should('contain', 'Dashboard');
  });

  it('Deve mostrar erro com credenciais inválidas', () => {
    cy.get('input[name="username"]').type('usuario_invalido');
    cy.get('input[name="password"]').type('senha_errada');
    cy.get('button[type="submit"]').click();
  });
});
