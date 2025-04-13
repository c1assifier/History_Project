import { createContext } from 'react';
import type { Theme } from './ThemeProvider';

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: 'dark',
  toggleTheme: () => {},
});
