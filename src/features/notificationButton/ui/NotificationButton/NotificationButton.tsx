import { memo, useCallback, useState } from 'react';
import cls from './NotificationButton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { NotificationList } from '@/entities/Notification';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(function NotificationButton(props: NotificationButtonProps) {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const trigger = (
    <Button onClick={onOpen} theme={ThemeButton.CLEAR}>
      <Icon Svg={NotificationIcon} width={30} height={30} inverted />
    </Button>
  );
  //BrowserView и MobileView можно вообще подгонять с lazy чтобы пользователю который сидит с телефона не подгрудалась BrowserView
  return (
    <div>
      <BrowserView>
        <Popover className={classNames(cls.NotificatoinButton, {}, [className])} direction="bottom left" trigger={trigger}>
          <NotificationList className={cls.notificaitons} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}

        <Drawer isOpen={isOpen} onClose={onClose}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
