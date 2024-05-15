import { lazy } from 'react';

export const AdminPanelPageAsync = lazy(
  () =>
    //@ts-ignore
    import('./AdminPanelPage'),
);
