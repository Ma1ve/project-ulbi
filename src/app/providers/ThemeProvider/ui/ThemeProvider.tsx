import { useState, useMemo, FC } from 'react';
import { Theme, ThemeContext } from '../../../../shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

// Тк localStorage всегда возвращает string мы должны явно привести к Theme
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
  children?: React.ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  // Делаем мемоизацию ту каждый раз у нас бы перерисовывался когда инициализировался
  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );

  return (
    <>
      <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
    </>
  );
};
