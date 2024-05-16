describe('Пользователь заходит на страницу с загрузкой статей', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit('articles');
    });
  });
  it('Cтатьи подгружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThen', 3);
  });

  it('На стабах (фиксиурах)', () => {
    cy.intercept('GET', '**/articles?*', {
      fixture: 'article-details.json',
    });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThen', 3);
  });
});
