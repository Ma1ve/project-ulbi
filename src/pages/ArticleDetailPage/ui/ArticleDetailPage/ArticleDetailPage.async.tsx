import { lazy } from 'react';

export const ArticleDetailPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import('./ArticleDetailPage'));
      }, 1500);
    }),
);
