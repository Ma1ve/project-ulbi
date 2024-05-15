import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.name').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export function getByTestId(testId: string) {
  return cy.get(selectByTestId(testId));
}

export const resetProfile = (profileId: string = '1') => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'asdfsfd' },
    body: {
      id: '1',
      name: 'sfh',
      lastname: 'MOSKAadsfasdfa',
      age: 22,
      currency: 'EUR',
      country: 'Ukraine',
      city: '22f',
      username: 'admin',
      avatar: 'https://tverigrad.ru/wp-content/uploads/2020/02/Mercedes-VISION-AVTR-1.jpg',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
