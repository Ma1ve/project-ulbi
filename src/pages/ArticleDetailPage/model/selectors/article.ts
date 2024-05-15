import { createSelector } from '@reduxjs/toolkit';
import { getArticlesDetailsData } from '@/entities/Articles';
// import { getArticlesDetailsData } from 'entities/Articles';
import { getUserAuthData } from '@/entities/User';

export const getCanEditArticle = createSelector(getArticlesDetailsData, getUserAuthData, (article, user) => {
  if (!article || !user) {
    return false;
  }

  return article.user.id === user.id;
});
