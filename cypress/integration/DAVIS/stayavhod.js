
describe('Тестирование формы авторизации https://staya.dog/', function () {

    it('Проверка проверка работы авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get('#stickyHeader > section.header-bottom.transition-header > div > div > a').click();
        cy.contains('Вход');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)').type('stud-86@mail.ru');
        cy.get('#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)').type('Dob11dek1986');
        cy.get('#__layout > div > main > div > div > div > section > div > form > button > span').click();
        cy.contains('Мои заказы')
    })
})