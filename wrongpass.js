
describe('Негативное тестирование формы авторизации https://login.qa.studio/', function () {

    it('Проверка ввода неправильного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iloveqastudio1');
        cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > img')
    })
})