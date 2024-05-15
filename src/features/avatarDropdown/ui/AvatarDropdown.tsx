import { memo, useCallback } from 'react';
import cls from './AvatarDropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RoutePath } from '@/app/providers/router/config/routeConfig';
import { getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(function AvatarDropdown(props: AvatarDropdownProps) {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelVisible = isAdmin || isManager;

  if (!authData) return null;
  return (
    <Dropdown
      direction={'bottom left'}
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isAdminPanelVisible ? [{ content: t('Админка'), href: RoutePath.admin_panel }] : []),
        { content: t('Профиль'), href: getRouteProfile(authData.id) /*  href: RoutePath.profile + authData.id  */ },
        { content: t('Выйти'), onClick: onLogout },
      ]}
      trigger={<Avatar size={30} src={authData.avatar} />}
    />
  );
});
