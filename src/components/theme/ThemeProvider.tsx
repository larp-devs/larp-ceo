import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useTheme, themePalettes, defaultTheme } from 'rinlab';

interface ThemeContextType {
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { currentPalette, setTheme } = useTheme();

  // Initialize theme
  useEffect(() => {
    // Use cyberpunk theme as default for LARP CEO
    const cyberpunkTheme = themePalettes.find(theme => theme.name === 'cyberpunk') || defaultTheme;
    setTheme(cyberpunkTheme);
    
    // Apply theme to document
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--font-mono', "'IBM Plex Mono', monospace");
      document.documentElement.style.backgroundColor = `hsl(${cyberpunkTheme.colors.background})`;
      document.documentElement.style.color = `hsl(${cyberpunkTheme.colors.foreground})`;
    }
  }, [setTheme]);

  // Toggle between cyberpunk and dos themes
  const toggleTheme = () => {
    const nextTheme = currentPalette.name === 'cyberpunk' 
      ? themePalettes.find(theme => theme.name === 'dos') 
      : themePalettes.find(theme => theme.name === 'cyberpunk');
    
    if (nextTheme) {
      setTheme(nextTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
