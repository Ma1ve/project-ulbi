// import { Theme } from '@/shared/const/theme';
import { createContext } from 'react';

// Должен находится в conts shared слой
export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

// В shared consts
// export const LOCAL_STORAGE_THEME_KEY = 'theme';
