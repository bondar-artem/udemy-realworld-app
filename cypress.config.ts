import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: '**/examples/*',
  },
})
