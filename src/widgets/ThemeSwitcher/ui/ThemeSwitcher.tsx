import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';

import { FC, memo } from 'react';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';

import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}
// Это фича должен находится не в widgets  а в features
export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(function ThemeSwitcher(props) {
  const { className } = props;

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className, cls[theme]])}>
        {theme === Theme.DARK ? <DarkIcon width={30} height={30} /> : <LightIcon width={30} height={30} />}
      </Button>
    </>
  );
});
