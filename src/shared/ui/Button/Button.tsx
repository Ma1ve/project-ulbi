import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

import React, { ButtonHTMLAttributes, FC, memo } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE_RED = 'outline_red',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  otherProps?: any;
  children: React.ReactNode;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo<ButtonProps>(function Button(props: ButtonProps) {
  const { className, children, theme = ThemeButton.OUTLINE, square, size = ButtonSize.M, disabled, fullWidth, ...otherProps } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <>
      <button disabled={disabled} type="button" className={classNames(cls.Button, mods, [className])} {...otherProps}>
        {children}
      </button>
    </>
  );
});
