import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '@/entities/Articles/model/types/article';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';

import IconEye from '@/shared/assets/icons/eye.svg';
import { Card } from '@/shared/ui/Card';
import { useHover } from '@/shared/lib/hooks/useHover/userHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemSkeletonProps {
  className?: string;

  view: ArticleView;
}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.SMALL) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} />
        </Card>
      </div>
    );
  }

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton border={'50%'} height={30} width={30} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={150} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />

          <Skeleton height={200} className={cls.img} />

          <div className={cls.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <div></div>
    </div>
  );
};
