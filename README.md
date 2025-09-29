

# Automação E2E com Cypress – OrangeHRM

##  Visão Geral

Este projeto automatiza os principais fluxos do sistema **OrangeHRM** usando **Cypress**, garantindo qualidade, confiabilidade e fácil manutenção. Os testes cobrem login, administração de usuários, validações de erro e responsividade.

---

##  Objetivos da Automação

* Validar o **login** de usuários (sucesso e erro).
* Garantir a **visualização da lista de usuários**.
* Automatizar o **fluxo de criação de usuário** e validação de campos obrigatórios.
* Testar o **logout** e a responsividade do login.
* Gerar **relatórios automáticos** de execução.

---

## Tecnologias Utilizadas

* **[Cypress](https://www.cypress.io/)** – Automação E2E web.
* **Node.js** + **npm** – Gerenciamento de dependências.
* **Mochawesome** – Relatórios automáticos.
* **Page Object Model (POM)** – Organização do código.

---

## Estrutura do Projeto

```bash
cypress/
 ├── e2e/             # Casos de teste organizados por fluxo
 │    ├── 1-login.cy.js
 │    ├── 2-login_logout.cy.js
 │    ├── 3-validar-lista-usuarios.cy.js
 │    ├── 4-erro-usuario-em-branco.cy.js
 │    ├── 5-loginInvalido.cy.js
 │    └── 6-responsividadeLogin.cy.js
 ├── pages/           # Page Objects (seletores + ações)
 ├── fixtures/        # Massa de dados (usuários, credenciais etc.)
 ├── reports/         # Relatórios de execução (Mochawesome)
 └── support/         # Configurações globais + comandos customizados
```

---

## Como Executar

### 1. Clonar o projeto

```bash
git clone https://github.com/usuario/orangehrm-cypress.git
cd orangehrm-cypress
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar os testes

* **Modo interativo (debug)**

```bash
npx cypress open
```

* **Modo headless (CI/CD)**

```bash
npx cypress run
```

### 4. Relatórios

Após a execução, relatórios HTML são gerados automaticamente em:

```
cypress/reports/
```

---

## Fluxos Cobertos

- Login válido e inválido
- Logout
- Validação da lista de usuários
- Criação de usuário com campos obrigatórios em branco
- Responsividade do login em diferentes dispositivos

Todos os testes possuem asserts claros, tratamento de exceções e evidências (screenshots).



