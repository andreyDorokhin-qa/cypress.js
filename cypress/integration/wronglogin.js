
describe('Негативное тестирование формы авторизации https://login.qa.studio/', function () {

    it('Проверка ввода неправильного логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > img')
    })
})