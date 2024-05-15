import { createAsyncThunk } from '@reduxjs/toolkit';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

import { getArticlesDetailsData } from '@/entities/Articles/model/selectors/articleDetails';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

import { fetchCommentsByArticalId } from '../fetchCommentsByArticalId/fetchCommentsByArticalId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>('articleDetails/addCommentForArticle', async (text, thunkAPI) => {
  const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

  const userData = getUserAuthData(getState());
  const article = getArticlesDetailsData(getState());

  if (!userData || !text || !article) {
    return rejectWithValue('no data');
  }

  try {
    const response = await extra.api.post<Comment>(`/comments`, {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(fetchCommentsByArticalId(article.id));

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
