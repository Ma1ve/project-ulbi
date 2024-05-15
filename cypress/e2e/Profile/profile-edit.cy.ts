let profileId = '';

describe('Пользователь заходит на страницу', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit('profile/' + profileId);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('И рофиль успешно загружается', () => {
    // cy.visit('profile/' + profileId);
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('Происходит редактирование', () => {
    const newName = 'new';
    const newLastname = 'lastname';

    cy.updateProfile(newName, newLastname);
    cy.getByTestId('ProfileCard.name').should('have.value', newName);
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});
