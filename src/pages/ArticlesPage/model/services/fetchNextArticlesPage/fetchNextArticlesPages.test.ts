import axios from 'axios';

import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleView } from '@/entities/Articles';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleSortFileld, ArticleType } from '@/entities/Articles/model/types/article';

jest.mock('../fetchArticlesList/fetchArticlesList');

const mockedAxios = jest.mocked(axios);

describe('fetchNextArticles.test.ts', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        view: ArticleView.SMALL,
        order: 'asc',
        sort: ArticleSortFileld.CREATED,
        search: '',
        type: ArticleType.ALL,
      },
    });
    await thunk.callThunk();
    // pending fullfild и 2 dispatch в actoin
    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled(); /* toHaveBeenCalledWith({ page: 3 }); */
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        view: ArticleView.SMALL,
        order: 'asc',
        sort: ArticleSortFileld.CREATED,
        search: '',
        type: ArticleType.ALL,
      },
    });
    await thunk.callThunk();
    // pending fullfild и 2 dispatch в actoin
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('fetchArticlesList isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false,
        view: ArticleView.SMALL,
        order: 'asc',
        sort: ArticleSortFileld.CREATED,
        search: '',
        type: ArticleType.ALL,
      },
    });
    await thunk.callThunk();
    // pending fullfild и 2 dispatch в actoin
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
