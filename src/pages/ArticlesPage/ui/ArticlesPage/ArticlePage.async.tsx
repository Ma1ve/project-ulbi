import { lazy } from 'react';

export const ArticlePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        //@ts-ignore
        resolve(import('./ArticlePage'));
      }, 1500);
    }),
);
