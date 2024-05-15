import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  // Тут мы можем передать любой ReactELement который будет отображаться в момент загрузки
  fallback?: ReactElement;
  // Запасной компонент который должен отрисоваться в случае возникновения ошибки
  errorFallback?: ReactElement;
}

export const AppImage = memo(function AppLink(props: AppImageProps) {
  const { className, src, alt = 'image', errorFallback, fallback, ...otherProps } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  // Отрабатывает асинхронно перед монтированием
  // useEffect Отрабатывает асинхронно после монтирования
  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError && errorFallback) {
    return errorFallback;
  }

  return (
    <>
      <img src={src} alt={alt} className={className} {...otherProps} />
    </>
  );
});
