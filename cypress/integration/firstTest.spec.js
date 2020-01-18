/// <reference types="cypress" />

describe('Test with backend', () => {

    beforeEach('login to the app', () => {
        cy.loginToApplication()
    })

    it('should log in', () => {
        cy.log('Yeeey we logged in!')
    })

})