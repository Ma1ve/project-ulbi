import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

import { Suspense, useCallback } from 'react';

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import { RouteConfig } from '@/shared/config/routeConfig/routeConfig';
import { RouteConfig } from '../config/routeConfig';
import { RequireAuth } from './RequireAuth';
import { Page } from '@/widgets/Page/Page';
import { PageLoader } from '@/widgets/PageLoader/PageLoader';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      }>
      {Object.values(RouteConfig).map(({ element, path, authOnly, roles }) => (
        <Route
          path={path}
          element={
            <Suspense
              fallback={
                <div>
                  <PageLoader />
                </div>
              }>
              <RequireAuth roles={roles}>{element}</RequireAuth>
            </Suspense>
          }
          key={path}
        />
      ))}

      {/* <Route index element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} /> */}
    </Route>,
  ),
);
