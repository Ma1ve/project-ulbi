import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArticleSortSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/Select';
import { ArticleSortFileld } from '@/entities/Articles/model/types/article';
import { SortOrder } from '@/shared/types';

interface ArticleSortSelectorProps {
  className?: string;
  sort?: ArticleSortFileld;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFileld) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector(props: ArticleSortSelectorProps) {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастание'),
      },
      {
        value: 'desc',
        content: t('убывание'),
      },
    ],
    [t],
  );

  const sortFieldOtions = useMemo<SelectOption<ArticleSortFileld>[]>(
    () => [
      {
        value: ArticleSortFileld.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortFileld.TITLE,
        content: t('названия '),
      },
      {
        value: ArticleSortFileld.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t],
  );

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortFileld> options={sortFieldOtions} label={t('Сортировать по')} value={sort} onChange={onChangeSort} />
      <Select options={orderOptions} label={t('по')} value={order} onChange={onChangeOrder} className={cls.order} />
    </div>
  );
});

// const changeSortHandler = useCallback(
//   (newSort: string) => {
//     onChangeSort(newSort as ArticleSortFileld);
//   },
//   [onChangeSort],
// );

// const changeOrderHandler = useCallback(
//   (newOrder: string) => {
//     onChangeOrder(newOrder as SortOrder);
//   },
//   [onChangeOrder],
// );
