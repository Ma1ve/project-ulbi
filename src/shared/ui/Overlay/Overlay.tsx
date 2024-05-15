import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(function Overlay(props: OverlayProps) {
  const { className, onClick } = props;
  const { t } = useTranslation();

  return <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])}></div>;
});
