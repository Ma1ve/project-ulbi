import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  test('', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('inc', async () => {
    const user = userEvent.setup();
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    await user.click(screen.getByTestId('increment-btn'));

    // fireEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('dec', () => {
    componentRender(<Counter />, { initialState: { counter: { value: 10 } } });

    // userEvent.click(screen.getByTestId('decrement-btn'));

    fireEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
