import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(function Tabs(props: TabsProps) {
  const { className, tabs, value, onTabClick } = props;

  // тк обычный () => примимает event а
  // и нам нужно сделать замыкание чтобы был tab
  const clickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <>
      <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab, index) => (
          <Card theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED} className={cls.tab} key={tab.value} onClick={clickHandler(tab)}>
            {tab.content}
          </Card>
        ))}
      </div>
    </>
  );
});
