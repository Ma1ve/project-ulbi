import { createEntityAdapter, createSlice, configureStore, EntityState, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticlesDetailsCommentsSchema } from '../types/ArticlesDetailsCommentsSchema';
import { fetchCommentsByArticalId } from '../services/fetchCommentsByArticalId/fetchCommentsByArticalId';

const commentsAdapter = createEntityAdapter({
  // Поле по которому будет идти нормализация
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>((state: StateSchema) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState());

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticlesDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticalId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticalId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticalId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
