import { createEntityAdapter, createSlice, configureStore, EntityState, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticlesDetailsCommentsSchema } from '../types/ArticlesDetailsCommentsSchema';
import { fetchCommentsByArticalId } from '../services/fetchCommentsByArticalId/fetchCommentsByArticalId';
import { ArticlesDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';
import { Article } from '@/entities/Articles';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter({
  // Поле по которому будет идти нормализация
  selectId: (article: Article) => article.id,
});

export const getArticleRecommendatoins = recommendationsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticlesDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
