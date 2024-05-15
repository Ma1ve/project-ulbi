import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticalId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>('articleDetails/fetchCommentsByArticalId', async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  if (!articleId) {
    return rejectWithValue('error');
  }

  try {
    const response = await extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
