import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '@/shared/ui/Portal';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMAITON_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({ animationDelay: ANIMAITON_DELAY, onClose, isOpen });

  const { theme } = useTheme();

  // const [isClosing, setIsClosing] = useState(false);
  // const [isMounted, setIsMounted] = useState(false);
  // const timerRed = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  // useEffect(() => {
  //   if (isOpen) {
  //     setIsMounted(true);
  //   }
  // }, [isOpen]);

  // // Когда тут нету useCallbakc у меня окно замерает и не хочет закрываться
  // // только если я не нажму на него второй раз
  // const closeHandler = useCallback(() => {
  //   if (onClose) {
  //     setIsClosing(true);
  //     timerRed.current = setTimeout(() => {
  //       onClose();
  //       setIsClosing(false);
  //     }, ANIMAITON_DELAY);
  //   }
  // }, [onClose]);

  // // на каждый перерендер компонента у меня заново все создается
  // // чтобы исправить это

  // const onKeyDown = useCallback(
  //   (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') {
  //       closeHandler();
  //     }
  //   },
  //   [closeHandler],
  // );

  // useEffect(() => {
  //   if (isOpen) {
  //     window.addEventListener('keydown', onKeyDown);
  //   }
  //   return () => {
  //     clearTimeout(timerRed.current);
  //     window.removeEventListener('keydown', onKeyDown);
  //   };
  // }, [isOpen, onKeyDown]);

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };
  // Из за Overlay нет нужды так как контент отдельно от overlay
  // const onContentClick = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  // };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.content} /*  onClick={onContentClick} */>{children}</div>
      </div>
    </Portal>
  );
};
