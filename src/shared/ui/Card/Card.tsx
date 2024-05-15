import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';
import React, { HTMLAttributes, memo, ReactNode } from 'react';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  otherProps?: any;
  theme?: CardTheme;
  onClick?: () => void;
}

export const Card = memo(function Card(props: CardProps) {
  const { className, children, theme = CardTheme.NORMAL, otherProps, onClick } = props;

  return (
    <>
      <div className={classNames(cls.Card, {}, [className, cls[theme]])} onClick={onClick} {...otherProps}>
        {children}
      </div>
    </>
  );
});
