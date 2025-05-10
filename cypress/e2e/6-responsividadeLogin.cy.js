describe('Desafio 8 - Responsividade do login', () => {
  const viewports = ['iphone-6', 'ipad-2', [1024, 768]];

  viewports.forEach(view => {
    it.only(`Deve funcionar corretamente em ${Array.isArray(view) ? view.join('x') : view}`, () => {
      if (Array.isArray(view)) {
        cy.viewport(view[0], view[1]); // Define largura e altura separadamente
      } else {
        cy.viewport(view); // Usa o preset de dispositivo
      }

      cy.visit('/web/index.php/auth/login');

      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();

      cy.contains('Dashboard').should('exist');

      // Tira um print da tela
      cy.screenshot(`login-responsivo-${Array.isArray(view) ? view.join('x') : view}`);
    });
  });
});
