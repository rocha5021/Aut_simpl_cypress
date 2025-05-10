const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com", // Substitua pela URL correta da aplicação
    specPattern: "cypress/e2e/**/*.cy.js", // Padrão para buscar arquivos de teste
    supportFile: false, // Opcional, se não usar um arquivo de suporte
  },
  reporter: "mochawesome", // Define o Mochawesome como repórter
  reporterOptions: {
    reportDir: "cypress/reports", // Diretório onde os relatórios serão salvos
    overwrite: false,
    html: true,
    json: true,
    
 specPattern: 'cypress/e2e/**/*.cy.js', // Apenas arquivos na pasta cypress/e2e

  },



});
