import { selectByTestId } from '../../helpers/selectByTestId';

describe('template spec', () => {
  describe('Пользовтель не авторизован', () => {
    it('Переход на гл страницу', () => {
      cy.visit('/');
      cy.get('[data-testid=sidebar-toggle]').should('exist');
    });

    // it('Переход на главную страницу', () => {
    //   cy.visit('/profile/1');
    //   cy.get('[data-testid=sidebar-toggle]').should('exist');
    // });

    // it('Открывает несуществующий маршрут', () => {
    //   cy.visit('/sfasfd');
    //   cy.get(selectByTestId('NotFoundPage')).should('exist');
    // });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('admin', '123');
    });

    it('Переход на страницу профиля', () => {
      cy.visit('/profile/1');
      // cy.get(selectByTestId('ProfilePage')).should('exist');
    });

    it('Переход на страницу about', () => {
      cy.visit('/about');
      // cy.get(selectByTestId('ProfilePage')).should('exist');
    });
  });
});
