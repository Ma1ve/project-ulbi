import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { articlePageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { SortOrder } from '@/shared/types';
import { ArticleSortFileld, ArticleType } from '@/entities/Articles/model/types/article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>('articlesPage/initArticlesPage', async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortFileld;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType;

    if (orderFromUrl) {
      dispatch(articlePageActions.setOrder(orderFromUrl));
    }

    if (sortFromUrl) {
      dispatch(articlePageActions.setSort(sortFromUrl));
    }

    if (searchFromUrl) {
      dispatch(articlePageActions.setSearch(searchFromUrl));
    }

    if (typeFromUrl) {
      dispatch(articlePageActions.setType(typeFromUrl));
    }

    dispatch(articlePageActions.initState());
    //@ts-ignore
    dispatch(fetchArticlesList({}));
  }
});
