import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import React, { FC, memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  BORDER = 'border',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  otherProps?: any;
  children: React.ReactNode;
  theme?: AppLinkTheme;
  target?: string;
}

export const AppLink = memo(function AppLink(props: AppLinkProps) {
  const { to, target, className, children, theme = AppLinkTheme.PRIMARY, otherProps } = props;

  return (
    <>
      <Link to={to} target={target} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
        {children}
      </Link>
    </>
  );
});
