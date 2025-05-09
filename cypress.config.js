const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js", // Padrão para buscar arquivos de teste
    supportFile: false, // Opcional, se não usar um arquivo de suporte
  },
  reporter: "mochawesome", // Define o Mochawesome como repórter
  reporterOptions: {
    reportDir: "cypress/reports", // Diretório onde os relatórios serão salvos
    overwrite: false,
    html: true,
    json: true,
  },
});
