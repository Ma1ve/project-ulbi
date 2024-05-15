import { useTranslation } from 'react-i18next';
import cls from './ArticleRecommendationsList.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Articles';
import { VStack } from '@/shared/ui/Stack';

import { useArticlesRecommendationsList } from '../../api/ArticlesRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

// const recommendationsApi = rtkApi.injectEndpoints({
//   endpoints: (build) => ({
//     getArticlesRecommendationsList: build.query({
//       query: (limit) => ({
//         url: '/articles',
//         params: {
//           _limit: limit,
//         },
//       }),
//     }),
//   }),
// });

export const ArticleRecommendationsList = memo(function ArticleRecommendationsList(props: ArticleRecommendationsListProps) {
  const { className } = props;
  const { t } = useTranslation();

  const { isLoading, data: articles, error } = useArticlesRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap={'8'} className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
      <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
      <ArticleList target={'_blank'} className={cls.recommendations} articles={articles} virtualized={false} />
    </VStack>
  );
});
