import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList, ArticlesViewSelector, ArticleView } from '@/entities/Articles';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageInited, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { Page } from '@/widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import { ArticlInfiniteList } from '@/pages/ArticleDetailPage/ui/ArticleInfiniteList/ArticleInfiniteList';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  // const articles = useSelector(getArticles.selectAll);

  // const isLoading = useSelector(getArticlesPageIsLoading);
  // const error = useSelector(getArticlesPageError);
  // const view = useSelector(getArticlesPageView);

  // const [searchParams] = useSearchParams();

  // const onLoadNextPart = useCallback(() => {
  //   //@ts-ignore
  //   dispatch(fetchNextArticlesPage());
  // }, [dispatch]);

  // useInitialEffect(() => {
  //   //@ts-ignore
  //   dispatch(initArticlesPage(searchParams));
  // });

  const onLoadNextPart = useCallback(() => {
    //@ts-ignore
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
        <ArticlesPageFilters />
        <ArticlInfiniteList className={cls.list} />
        {/* <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles} /> */}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
