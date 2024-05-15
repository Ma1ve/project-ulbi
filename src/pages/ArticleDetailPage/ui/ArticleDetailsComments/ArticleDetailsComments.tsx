import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsComments.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useCallback } from 'react';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticalCommentsIsLoading } from '../../model/selectors/comments';
import { useSelector } from 'react-redux';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticalId } from '../../model/services/fetchCommentsByArticalId/fetchCommentsByArticalId';

interface articleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments(props: articleDetailsCommentsProps) {
  const { className, id } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticalCommentsIsLoading);

  useInitialEffect(() => {
    //@ts-ignore
    dispatch(fetchCommentsByArticalId(id));
    //@ts-ignore
    // dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      //@ts-ignore
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  return (
    <div className={classNames(cls.articleDetailsComments, {}, [className])}>
      <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
      <Suspense fallback="Идёт загрузка">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
});
