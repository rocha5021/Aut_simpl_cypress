describe('Responsividade do login - OrangeHRM', () => {
  const devices = [
    { name: 'iPhone 6', width: 375, height: 667 },
    
    { name: 'iPad 2', width: 768, height: 1024 },
    
    { name: 'Desktop 1024x768', width: 1024, height: 768 },
    
    { name: 'Samsung S25', width: 412, height: 915 },    // resolução simulada
    
    { name: 'Motorola 2025', width: 414, height: 896 },  // resolução simulada
   
    { name: 'Redmi Note 11', width: 393, height: 873 }   // resolução real aproximada
    
  ];

  devices.forEach(device => {
    it(`Deve funcionar corretamente em ${device.name}`, () => {
      cy.viewport(device.width, device.height);

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      cy.get('input[name="username"]').type('Admin');
      cy.wait(2000);
      cy.get('input[name="password"]').type('admin123');
      cy.wait(2000);
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.contains('Dashboard').should('exist');

      // Screenshot para análise de layout
      cy.screenshot(`login-responsivo-${device.name}`);
    });
  });
});
