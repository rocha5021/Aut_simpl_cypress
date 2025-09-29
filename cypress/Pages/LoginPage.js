class LoginPage {
  // Seletores atualizados para OrangeHRM demo
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  // Ações
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    cy.get('input[name="username"]').clear().type(username);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
