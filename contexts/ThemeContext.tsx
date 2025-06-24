
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Theme, ThemeContextType, ThemeColors } from '../types';
import { THEMES } from '../constants/themes';

const defaultTheme = THEMES.find(t => t.id === 'default-dark') || THEMES[0];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      // Convert camelCase to kebab-case for CSS custom property names
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });
    localStorage.setItem('selectedThemeId', theme.id);
    setCurrentTheme(theme);
  }, []);

  useEffect(() => {
    const savedThemeId = localStorage.getItem('selectedThemeId');
    const themeToLoad = THEMES.find(t => t.id === savedThemeId) || defaultTheme;
    applyTheme(themeToLoad);
  }, [applyTheme]);

  const changeTheme = (themeId: string) => {
    const newTheme = THEMES.find(t => t.id === themeId);
    if (newTheme) {
      applyTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme, availableThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
