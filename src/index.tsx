import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/ThemeProvider';

import { AppRouter } from '@/app/providers/router/ui/AppRouter';

import '@/shared/config/i18n/i18n';

import '@/app/styles/index.scss';
import { StoreProvider } from '@/app/providers/StoreProvider';

const domNode = document.getElementById('root');

if (!domNode) {
  throw new Error('Контейнер root не найден');
}

const root = createRoot(domNode /* as Element */);

root.render(
  <ThemeProvider>
    {/* @ts-ignore */}
    <StoreProvider>
      <RouterProvider router={AppRouter} />
    </StoreProvider>
  </ThemeProvider>,
);
