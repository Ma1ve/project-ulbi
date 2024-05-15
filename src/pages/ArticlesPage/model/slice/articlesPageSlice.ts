import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entities/Articles';
import { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ArticleSortFileld, ArticleType } from '@/entities/Articles/model/types/article';
import { SortOrder } from '@/shared/types';

const articlesAdapter = createEntityAdapter({
  // Поле по которому будет идти нормализация
  selectId: (article: Article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>((state: StateSchema) => state.articlesPage || articlesAdapter.getInitialState());

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
    _inited: false,
    order: 'asc',
    sort: ArticleSortFileld.CREATED,
    search: '',
    limit: 9,
    type: ArticleType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;

      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },

    setSort: (state, action: PayloadAction<ArticleSortFileld>) => {
      state.sort = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },

    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;

      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        //addMany добавляет данные в конец setAll полностью перезатирает данные

        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlePageActions } = articlesPageSlice;
