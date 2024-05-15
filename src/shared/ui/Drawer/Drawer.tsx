import { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
const ANIMAITON_DELAY = 300;

const height = window.innerHeight - 100;

export const DrawerContent = memo(function Drawer(props: DrawerProps) {
  const { Gesture, Spring } = useAnimationLibs();

  const { className, children, isOpen, onClose, lazy } = props;

  // const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMAITON_DELAY, onClose, isOpen });

  const { theme } = useTheme();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -70) cancel();

      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : openDrawer();
      } else api.start({ y: my, immediate: true });
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
  );

  if (!isOpen) return null;

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  // if (lazy && !isMounted) {
  //   return null;
  // }

  const mods: Mods = {
    [cls.opened]: isOpen,
    // [cls.isClosing]: isClosing,
  };

  // Из за Overlay нет нужды так как контент отдельно от overlay
  // const onContentClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  // };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />

        <Spring.a.div className={cls.sheet} style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()}>
          {children}
        </Spring.a.div>

        {/* раньше было просто список */}
        {/* <div className={cls.content}>{children}</div> */}
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) return null;

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
