Cypress.Commands.add('loginWithOkta', () => {
    const optionsSessionToken = {
        method: 'POST',
        url: 'https://----OKTA_AUTH_URL---/api/v1/authn',
        body: {
            username: Cypress.env('username'),
            password: Cypress.env('password'),
            options: {
                warnBeforePasswordExpired: 'true'
            }
        }
    };

    cy.request(optionsSessionToken).then(response => {
        const sessionToken = response.body.sessionToken;
        const qs = {
            client_id: '--client-id--',
            state: '--state-token--',
            nonce: '--nonce-token--',
            redirect_uri: 'http://localhost:4200/implicit/callback',
            response_mode: 'fragment',
            response_type: 'id_token token',
            scope: ['some', 'scome', 'of', 'your', 'application'],
            sessionToken
        };

        cy.request({
            method: 'GET',
            url: 'https://--OKTA-AUTHORIZATION-URL--/oauth2/default/v1/authorize?',
            form: true,
            followRedirect: false,
            qs
        }).then(responseWithToken => {
            const redirectUrl = responseWithToken.redirectedToUrl;

            const accessToken = redirectUrl
                .substring(redirectUrl.indexOf('access_token'))
                .split('=')[1]
                .split('&')[0];

            cy.wrap(accessToken).as('accessToken');

            cy.visit(redirectUrl).then(() => {
                cy.visit('/');
            });
        });
    });
});