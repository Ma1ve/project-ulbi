import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailPage.module.scss';
import { useTranslation } from 'react-i18next';

import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticalId } from '../../model/services/fetchCommentsByArticalId/fetchCommentsByArticalId';

import { Page } from '@/widgets/Page/Page';

import { articleDetailsPageReducer } from '../../model/slices';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList/ui/ArticleRecommendationsList/ArticleRecommendationsList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Articles';
import { ArticleRating } from '@/features/aticleRating';
import { fetchArticleById } from '@/entities/Articles/model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '@/entities/Articles/model/slice/articleDetailsSlice';

interface ArticleDetailPageProps {
  className?: string;
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer,
  article: articleDetailsReducer,
};

const ArticleDetailPage = (props: ArticleDetailPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  // const comments = useSelector(getArticleComments.selectAll);
  // const recommendations = useSelector(getArticleRecommendatoins.selectAll);

  // const recommendationsIsLoading = useSelector(getArticaleRecommendationsLoading);
  // const commentsIsLoading = useSelector(getArticalCommentsIsLoading);
  // const commentsError = useSelector(getArticalCommentsError);

  const dispatch = useAppDispatch();

  // const onSendComment = useCallback(
  //   (text: string) => {
  //     //@ts-ignore
  //     dispatch(addCommentForArticle(text));
  //   },
  //   [dispatch],
  // );

  // useInitialEffect(() => {
  //@ts-ignore
  // dispatch(fetchCommentsByArticalId(id));

  //@ts-ignore
  // dispatch(fetchArticleRecommendations());
  // });

  // if (!id) {
  //   return (
  //     <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
  //       <div>{t('Статья не найдена')}</div>
  //     </Page>
  //   );
  // }

  if (!id) return null;

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailPage, {}, [className])}>
        <VStack gap={'16'} max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailPage);
