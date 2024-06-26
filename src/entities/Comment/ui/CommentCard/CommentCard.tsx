import { Comment } from '@/entities/Comment/model/types/comment';
import cls from './CommentCard.module.scss';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { VStack } from '@/shared/ui/Stack';
import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack gap={'16'} max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={getRouteProfile(comment.user.id)} /* to={`${RoutePath.profile}${comment.user.id}`} */ className={cls.header}>
        {comment.user?.avatar ? <Avatar size={30} src={comment.user?.avatar} /> : null}
        <Text className={cls.username} title={comment.user?.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack>
  );
};
