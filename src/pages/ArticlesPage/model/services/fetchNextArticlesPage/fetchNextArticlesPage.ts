import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Article } from '@/entities/Articles';
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum } from '../../selectors/articlesPageSelectors';
import { articlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>('articlesPage/fetchNextArticlesPage', async (_, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;

  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlesPageNum(getState());
  const isLoading = getArticlesPageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1));
    //@ts-ignore
    dispatch(fetchArticlesList({}));
  }
});
