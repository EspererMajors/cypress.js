describe('Покупка аватара на покемонах', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru'); //Перешли на сайт покемонов
         cy.get('#k_email').type('NAME'); //Ввели правильный логин
         cy.get('#k_password').type('PASSWORD'); // Ввели правильный пароль
         cy.get('.MuiButton-root').click(); //Нажали вход
         cy.wait(2000); //ждем 200 сек
         cy.get('.header_card_trainer').click(); //Перешли в шапку тренера
         cy.wait(2000); //ждем 200 сек
         cy.get('.k_mobile > :nth-child(5)').click(); //Перешли в покупку аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('4111111111111111');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('10/30');                           // вводим срок действия карты
         cy.get('.card_name').type('agatha christy');                           // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке


     })
 }) 