import { EditableProfileCard } from '@/features/editableProfileCard/ui/EditableProfileCard/EditableProfileCard';
import { TestProvider } from '@/shared/config/tests/componentRender/componentRender';
describe('EditableProfilCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider>
        <EditableProfileCard id={'1'} />
      </TestProvider>,
    );
  });
});
