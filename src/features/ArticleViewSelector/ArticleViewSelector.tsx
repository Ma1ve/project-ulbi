import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { memo } from 'react';
import { ArticleView } from '@/entities/Articles/model/types/article';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/square.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticlesViewSelector = memo(function ArticlesViewSelector(props: ArticlesViewSelectorProps) {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticlesViewSelector, {}, [className])}>
      <>
        {viewTypes.map((viewType, idx) => (
          <Button theme={ThemeButton.CLEAR} onClick={onClick(viewType.view)} key={idx}>
            <Icon Svg={viewType.icon} width={30} height={30} className={classNames('', { [cls.notSelected]: viewType.view !== view })} />
          </Button>
        ))}
      </>
    </div>
  );
});
