describe('Проверка логина и пароля', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин правильный
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажали вход
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Есть сообщение об успехе
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#messageHeader').should('be.visible'); // Текст об успехе виден
     })
  

it('Забыл пароль', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');; // Нажали кнопку "забыли пароль"
         cy.get('#forgotEmailButton').click(); // Нажали кнопку "забыли пароль"
         cy.get('#exitRestoreButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели логин правильный (можно любой)
         cy.get('#restoreEmailButton').click(); // Нажали "отправить код"
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Есть сообщение об отправке сообщения
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден

     })

 it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин правильный
         cy.get('#pass').type('iLoveqastudio2'); // Ввели НЕправильный пароль
         cy.get('#loginButton').click(); // Нажали вход
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Есть сообщение об ошибке
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#messageHeader').should('be.visible'); // Текст об ошибке виден
     })

it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#mail').type('star@dolnikov.ru'); // Ввели логин НЕправильный
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажали вход
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Есть сообщение об ошибке
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#messageHeader').should('be.visible'); // Текст об ошибке виден
     })

it('Логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажали вход
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Есть сообщение об ошибке валидации
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#messageHeader').should('be.visible'); // Текст об ошибке виден
     })

     it('Проверка привидения к строчным буквам', function () {
         cy.visit('https://login.qa.studio');  // Зашли на сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с большими буквами
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').click(); // Нажали вход
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Есть сообщение об успехе
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         cy.get('#messageHeader').should('be.visible'); // Текст об успехе виден
     })
  

})

//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна
//(текст именно «Авторизация прошла успешно» и наличие кнопки крестик)