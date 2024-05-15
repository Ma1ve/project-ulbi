import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { useNotificaitons } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { NotificationItem } from '../NotificaitonItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';

interface NotificationProps {
  className?: string;
}

export const NotificationList = memo(function Notification(props: NotificationProps) {
  const { className } = props;

  // long Pulling также есть event sourcing socket websoket сильнее нагружают так как устанавливается полноценное соединение
  const { data, isLoading } = useNotificaitons(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack gap={'16'} max className={classNames(cls.NotitficationList, {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack gap={'16'} max className={classNames(cls.NotitficationList, {}, [className])}>
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
