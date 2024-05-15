import { useTheme } from '@/app/providers/ThemeProvider';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export function useModal(props: UseModalProps) {
  const { onClose, isOpen, animationDelay } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRed = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  // Когда тут нету useCallbakc у меня окно замерает и не хочет закрываться
  // только если я не нажму на него второй раз
  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRed.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  // на каждый перерендер компонента у меня заново все создается
  // чтобы исправить это

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRed.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close,
  };
}
