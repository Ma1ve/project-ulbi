import { Comment } from '@/entities/Comment/model/types/comment';
import cls from './CommentList.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';

interface CommentListProps {
  className?: string;
  comments: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, isLoading, comments } = props;

  const { t } = useTranslation();

  const mods: Mods = {};

  if (isLoading) {
    <VStack gap={'16'} max className={classNames(cls.CommentList, mods, [className])}>
      <CommentCard isLoading className={cls.comment} />)
      <CommentCard isLoading className={cls.comment} />)
      <CommentCard isLoading className={cls.comment} />)
    </VStack>;
  }
  return (
    <VStack gap={'16'} className={classNames(cls.CommentList, mods, [className])}>
      {comments?.length ? comments.map((comment, index) => <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={index} />) : <Text title={t('Нет комментариев')} />}
    </VStack>
  );
};
