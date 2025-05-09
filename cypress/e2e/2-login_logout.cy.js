// cypress/e2e/login_logout.cy.test.js
describe('Login e Logout - OrangeHRM Tests', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com');
    cy.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test on uncaught exceptions
      return false;
    });
  });

  it('Deve fazer login com sucesso e verificar o Dashboard', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('h6').should('contain', 'Dashboard');
  });

  it('Deve fazer logout com sucesso', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
  });

  it('Deve mostrar erro ao usar credenciais inválidas', () => {
    cy.get('input[name="username"]').type('usuario_invalido');
    cy.get('input[name="password"]').type('senha_errada');
    cy.get('button[type="submit"]').click();
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('Deve lidar com erro de elemento ausente', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.get('h6').should('exist').and('contain', 'Dashboard');
  });
});