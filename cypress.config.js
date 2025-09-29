const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar plugins, se precisar
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com", // URL padrão
    video: true,   // grava vídeos dos testes
    screenshotOnRunFailure: true // tira prints em falhas
  },
});

