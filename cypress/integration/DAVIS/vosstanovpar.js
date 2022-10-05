
describe('Тестирование логики восстановления пароля https://login.qa.studio/', function () {

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.contains('Восстановите пароль');
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader');
        cy.get('#exitMessageButton > img')
    })
})