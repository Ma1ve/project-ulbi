import React, { memo, useMemo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/shared/ui/LangSwitcher';

import { useTranslation } from 'react-i18next';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
// import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { VStack } from '@/shared/ui/Stack';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(function Sidebar(props: SidebarProps) {
  const { className } = props;

  const { t } = useTranslation();

  const [collapsed, useCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    useCollapsed((prev) => !prev);
  };

  const sidebarItemsList = useSelector(getSidebarItems);

  const renderSidebarItems = useMemo(() => {
    return sidebarItemsList.map((item) => <SidebarItem item={item} key={item.path} collapsed={collapsed} />);
  }, [collapsed, sidebarItemsList]);

  return (
    <aside data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button size={ButtonSize.L} theme={ThemeButton.BACKGROUND_INVERTED} square data-testid="sidebar-toggle" onClick={onToggle} className={cls.collapseBtn}>
        {collapsed ? '>' : '<'}
      </Button>

      <VStack role={'navigation'} gap={'8'} className={cls.items}>
        {renderSidebarItems}
      </VStack>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </aside>
  );
});

// import React, { FC } from 'react';

// import { classNames } from 'helpers/classNames/classNames';}
// import cls from 'Sidebar.module.scss'

// interface SidebarProps {
//   className?: string;
// }

// export const Sidebar = (props: SidebarProps) => {
//   const {className} = props;

//   return (
//     <div className={classNames(cls.Sidebar, {}, [className])}>
//       <div></div>
//     </div>
//   );
// };
