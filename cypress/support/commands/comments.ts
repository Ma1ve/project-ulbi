import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from 'cypress/helpers/selectByTestId';

export const addComment = (text: string) => {
  cy.getByTestId('AddCommentsForm.Input').type(text);
  cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
