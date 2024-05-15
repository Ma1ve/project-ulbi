import { useTranslation } from 'react-i18next';
import cls from './ArticlInfiniteList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSearchParams } from 'react-router-dom';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { getArticles } from '@/pages/ArticlesPage/model/slice/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleList } from '@/entities/Articles';
import { initArticlesPage } from '@/pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';

interface ArticlInfiniteListProps {
  className?: string;
}

export const ArticlInfiniteList = memo(function ArticlInfiniteList(props: ArticlInfiniteListProps) {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    //@ts-ignore
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <div className={classNames(cls.articlInfiniteList, {}, [className])}>
      <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles} />
    </div>
  );
});
