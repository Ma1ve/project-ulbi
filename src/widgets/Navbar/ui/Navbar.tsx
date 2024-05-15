import React, { memo, useCallback, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
// import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { HStack } from '@/shared/ui/Stack';

import { RoutePath } from '@/app/providers/router/config/routeConfig';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text className={cls.appName} title={t('APP TV')} theme={TextTheme.INVERTED} />
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY} className={cls.createBtn}>
          {t('Создать статью')}
        </AppLink>
        <HStack gap={'16'} className={cls.actions}>
          {/* <button onClick={onOpen}>click</button> */}
          {/* <Drawer isOpen={isOpen} onClose={onClose}>
            <NotificationList />
          </Drawer> */}
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button className={cls.links} theme={ThemeButton.OUTLINE} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
