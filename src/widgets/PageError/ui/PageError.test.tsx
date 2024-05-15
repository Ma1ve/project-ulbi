import { PageError } from './PageError';

import { renderWithTranslation } from '@/shared/config/tests/renderWithTranslation/renderWithTranslation';

describe('Page Error', () => {
  test('render PageError', () => {
    renderWithTranslation(<PageError />);
    // render(<PageErrorTranslation />);
  });
});
