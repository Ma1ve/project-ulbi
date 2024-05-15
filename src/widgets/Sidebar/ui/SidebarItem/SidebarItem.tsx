import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { t } = useTranslation();
  const { item, collapsed } = props;

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <div className={cls.item}>
      <AppLink to={item.path} theme={AppLinkTheme.SECONDARY} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
        <item.Icon width={40} height={40} className={cls.icon} />
        {/* <MainIcon width={40} height={40} /> */}
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
};
