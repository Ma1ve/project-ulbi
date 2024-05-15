import { RatingCard } from '@/entities/Rating';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo(function ArticleRating(props: ArticleRatingProps) {
  const { className, articleId } = props;

  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? '',
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.log(error);
      }
    },
    [articleId, rateArticleMutation, userData?.id],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  if (isLoading) return <Skeleton width="100%" height={120} />;

  const rate = data?.rate ?? 0;
  return (
    <>
      <RatingCard onAccept={onAccept} onCancel={onCancel} rate={rate} className={classNames('', {}, [className])} title={'Оцените статью'} feedbackTitle={'Оставьте свой отзыв о статье'} hasFeedback />
    </>
  );
});

export default ArticleRating;
