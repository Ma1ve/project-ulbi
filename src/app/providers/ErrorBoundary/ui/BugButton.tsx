import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './BugButton.module.scss';
import { Button } from '@/shared/ui/Button';
import { useEffect, useState } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary

export const BugButton = ({}: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <>
      {/*  eslint-disable i18next/no-literal-string*/}
      <Button onClick={onThrow}>throw error</Button>
    </>
  );
};
