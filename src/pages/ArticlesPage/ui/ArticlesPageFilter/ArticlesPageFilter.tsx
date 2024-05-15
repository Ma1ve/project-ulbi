import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticlesPageFilter.module.scss';
import { ArticlesViewSelector, ArticleTypeTabs, ArticleView } from '@/entities/Articles';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlePageActions } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { useSelector } from 'react-redux';
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';

import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { ArticleSortSelector } from '@/features/ArticleSortSelector/ArticleSortSelector';
import { ArticleSortFileld, ArticleType } from '@/entities/Articles/model/types/article';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo(function ArticlesPageFilters(props: ArticlesPageFiltersProps) {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const search = useSelector(getArticlesPageSearch);

  const fetchData = useCallback(() => {
    //@ts-ignore
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlePageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (order: SortOrder) => {
      dispatch(articlePageActions.setOrder(order));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (sort: ArticleSortFileld) => {
      dispatch(articlePageActions.setSort(sort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlePageActions.setSearch(search));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const type = useSelector(getArticlesPageType);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticlesViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input placeholder={t('Поиск по')} value={search} onChange={onChangeSearch} />
      </Card>
      <ArticleTypeTabs onChangeType={onChangeType} value={type} className={cls.tabs} />
    </div>
  );
});
