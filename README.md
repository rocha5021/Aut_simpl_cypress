

# Automação E2E com Cypress – OrangeHRM

##  Visão Geral

Este projeto automatiza os principais fluxos do sistema **OrangeHRM** usando **Cypress**, garantindo qualidade, confiabilidade e fácil manutenção. Os testes cobrem login, administração de usuários, validações de erro e responsividade.

---

##  Objetivos

* Validar o **login** de usuários (sucesso e erro).
* Garantir a **visualização da lista de usuários**.
* Automatizar o **fluxo de criação de usuário** e validação de campos obrigatórios.
* Testar o **logout** e a responsividade do login.
* Gerar **relatórios automáticos** de execução.

---

## Tecnologias Utilizadas

* **Cypress**
* **Node.js** + **npm**
* **Mochawesome** – Relatórios automáticos
* **Page Object Model (POM)**

---

## Estrutura do Projeto

```bash
cypress/
 ├── e2e/
 │    ├── 1-login.cy.js
 │    ├── 2-login_logout.cy.js
 │    ├── 3-validar-lista-usuarios.cy.js
 │    ├── 4-erro-usuario-em-branco.cy.js
 │    ├── 5-loginInvalido.cy.js
 │    └── 6-responsividadeLogin.cy.js
 ├── pages/
 ├── fixtures/
 ├── reports/         # Relatórios (Mochawesome)
 └── support/
```

---

## 

###  projeto

```bash
git clone https://github.com/rocha5021/Aut_simpl_cypress.git

```

### dependências

```bash
npm install
```

### Executar

* **Modo interativo**

```bash
npx cypress open
```

* **headless**

```bash
npx cypress run
```

### Relatórios
* **Após a execução, relatórios HTML são gerados automaticamente**
```
cypress/reports/
```

---

## Fluxos Cobertos

- Login válido e inválido
- Logout
- Validação da lista de usuários
- Login com Usuario em branco  **Error*
- Responsividade do login em diferentes dispositivos

Todos os testes possuem asserts claros, tratamento de exceções e evidências (screenshots).



