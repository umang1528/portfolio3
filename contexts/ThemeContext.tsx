import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { Theme, ThemeContextType } from '../types';
import { THEMES } from '../constants/themes';

const defaultTheme = THEMES.find((t) => t.id === 'classic-light') || THEMES[0];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  const applyTheme = useCallback((theme: Theme) => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });
    localStorage.setItem('selectedThemeId', theme.id);
    setCurrentTheme(theme);
  }, []);

  // Load theme from localStorage and listen for external updates
  useEffect(() => {
    const loadSavedTheme = () => {
      const savedThemeId = localStorage.getItem('selectedThemeId');
      const themeToLoad = THEMES.find((t) => t.id === savedThemeId) || defaultTheme;
      applyTheme(themeToLoad);
    };

    loadSavedTheme();

    // Sync theme if changed from another tab or window
    window.addEventListener('storage', loadSavedTheme);

    return () => {
      window.removeEventListener('storage', loadSavedTheme);
    };
  }, [applyTheme]);

  const changeTheme = (themeId: string) => {
    const newTheme = THEMES.find((t) => t.id === themeId);
    if (newTheme) {
      applyTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        changeTheme,
        availableThemes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Optional helper hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
