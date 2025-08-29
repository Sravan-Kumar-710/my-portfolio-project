import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
      setIsMounted(true);
    } catch (error) {
      console.error('Error initializing theme:', error);
      setTheme('light');
      setIsMounted(true);
    }
  }, []);

  // Update the HTML class and save preference when theme changes
  useEffect(() => {
    if (!isMounted) return;
    
    try {
      const root = document.documentElement;
      
      // Remove both classes first to avoid any conflicts
      root.classList.remove('light', 'dark');
      // Add the current theme class
      root.classList.add(theme);
      
      // Save theme preference
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('Theme toggled to:', newTheme);
      return newTheme;
    });
  };

  // Don't render children until theme is initialized
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
