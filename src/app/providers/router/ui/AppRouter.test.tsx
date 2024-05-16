import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { AppRouter } from './AppRouter';
import { getRouteAbout, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';

describe('router', () => {
  test('initialRoute', async () => {
    //@ts-ignore
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Когда не существует', async () => {
    //@ts-ignore
    componentRender(<AppRouter />, {
      route: '/sdfsdfsf',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизированного', async () => {
    //@ts-ignore
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });
    // нужно не забывать устанавливать data-testid
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('доступ к закрытой авторизованого пользователя ', async () => {
    //@ts-ignore
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          //@ts-ignore
          authData: {},
        },
      },
    });
    // нужно не забывать устанавливать data-testid
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });
});
