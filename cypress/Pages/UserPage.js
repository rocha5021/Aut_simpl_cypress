class UserPage {
  // Seletores atualizados para OrangeHRM demo
  adminMenu = 'span:contains("Admin")';
  addUserButton = 'button:contains("Add")';
  usernameField = 'input[autocomplete="off"][class*="oxd-input"]';
  passwordField = 'input[type="password"]:eq(0)';
  confirmPasswordField = 'input[type="password"]:eq(1)';
  saveButton = 'button:contains("Save")';
  searchField = 'input[placeholder="Search"]';
  searchButton = 'button:contains("Search")';
  deleteButton = 'button:contains("Delete")';

  // Ações
  goToUserManagement() {
    cy.contains('span', 'Admin', { timeout: 10000 }).click();
  }

  clickAddUser() {
    cy.contains('Add').click();
  }

  createUser(username, password) {
    // Seleciona User Role
    cy.get('.oxd-select-wrapper').eq(0).click();
    cy.get('.oxd-select-dropdown').contains('Admin').click();

    // Preenche Employee Name
    cy.get('input[placeholder="Type for hints..."]').type('Paul');
    cy.get('.oxd-autocomplete-dropdown', { timeout: 10000 }).should('be.visible');
    cy.get('.oxd-autocomplete-dropdown').contains('Paul Collings', { timeout: 10000 }).click();

    // Seleciona Status
    cy.get('.oxd-select-wrapper').eq(1).click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click();

    // Preenche Username
    cy.get('input[autocomplete="off"][class*="oxd-input"]').first().type(username);

    // Preenche Senha
    cy.get('input[type="password"]').eq(0).type(password);
    cy.get('input[type="password"]').eq(1).type(password);

    // Salva
    cy.contains('Save').click();
  }

  searchUser(username) {
    cy.get(this.searchField).type(username);
    cy.contains('Search').click();
  }

  deleteUser() {
    cy.contains('Delete').first().click();
  }

  logout() {
    cy.get('.oxd-userdropdown-name').should('be.visible').click();
    cy.contains('Logout').should('be.visible').click();
  }
}

export default new UserPage();




