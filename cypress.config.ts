import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  env: {
    username: 'cytest@test.com',
    password: 'Welcome123',
    apiUrl: 'https://api.realworld.io/',
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: 'http://localhost:4200/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: '**/examples/*',
  },
})
