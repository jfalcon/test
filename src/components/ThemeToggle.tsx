import React, { useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

const defaultTheme = (
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'dark' : 'light';

const initTheme = (localStorage.getItem('theme') ?? defaultTheme) as ThemeMode;

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(initTheme);

  // Load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Update document attribute and save to localStorage when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button data-testid="theme-toggle" onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
