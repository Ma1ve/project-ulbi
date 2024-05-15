import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/article';

import { useSelector } from 'react-redux';
import { getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>('articleDetails/fetchArticleById', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    if (!articleId) {
      throw new Error('');
    }

    const response = await extra.api.get<Article>(`/articles/${articleId}`, {
      /*   params: {
        _expand: 'user',
      }, */
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
