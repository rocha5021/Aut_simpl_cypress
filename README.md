

# 🧪 Projeto de Automação com Cypress - OrangeHRM

Este projeto tem como objetivo demonstrar a automação de testes end-to-end utilizando o **Cypress**, aplicada à plataforma de gestão de RH **OrangeHRM**. Os testes abrangem cenários críticos como login, navegação no dashboard, criação e exclusão de usuários, além da validação de mensagens de erro.

---

## 🚀 Tecnologias Utilizadas

- **Cypress** – Framework de testes E2E
- **Mochawesome** – Geração de relatórios em HTML e JSON

---

## 📂 Estrutura do Projeto

Auto_cypress_exemplo/
├── cypress/
│ ├── e2e/ # Casos de teste automatizados
│ │ └── orangeHRM.cy.js
│ ├── reports/ # Relatórios gerados automaticamente
│ └── support/ # Suporte com Page Objects
│ └── pages/
│ ├── LoginPage.js
│ └── UserPage.js
├── cypress.config.js # Configurações do Cypress
├── package.json # Dependências e scripts
└── README.md # Documentação do projeto


---

## 🧪 Cenários Automatizados

- ✅ Login e Logout
- ✅ Navegação até a aba "Admin" e validação da lista de usuários
- ✅ Criação e exclusão de usuários
- ✅ Validação de erro ao tentar criar um usuário com campo obrigatório em branco

---

## ⚙️ Configuração do Cypress

### Instalação

```bash
npm install

Execução dos Testes


npx cypress open      # Abre a interface interativa do Cypress
npx cypress run       # Executa os testes em modo headless

📊 Relatórios com Mochawesome

O projeto está configurado para gerar relatórios automáticos com o Mochawesome em formato HTML e JSON, disponíveis no diretório cypress/reports.
Trecho de configuração no cypress.config.js:

reporter: "mochawesome",
reporterOptions: {
  reportDir: "cypress/reports",
  overwrite: false,
  html: true,
  json: true,
}

📌 Requisitos

    Node.js v14 ou superior

    NPM (Node Package Manager)

🤝 Contribuição

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue para discutirmos o que você gostaria de modificar.
📬 Contato

Caso tenha dúvidas ou queira trocar ideias sobre QA e automação de testes, fique à vontade para entrar em contato via LinkedIn ou abrir uma issue neste repositório.
