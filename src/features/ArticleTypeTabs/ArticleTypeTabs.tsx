import { memo, useCallback, useMemo } from 'react';
import cls from './ArticleTypeTabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Articles/model/types/article';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { useTranslation } from 'react-i18next';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs(props: ArticleTypeTabsProps) {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('Все статьи') },
      { value: ArticleType.IT, content: t('IT') },
      { value: ArticleType.ECONOMICS, content: t('ECONOMICS') },
      { value: ArticleType.SCIENCE, content: t('SCIENCE') },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return <Tabs tabs={typeTabs} value={value} onTabClick={onTabClick} className={classNames(cls.ArticleTypeTabs, {}, [className])} />;
});
