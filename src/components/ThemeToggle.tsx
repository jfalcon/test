import React, { useState, useEffect } from 'react';
import ModeIcon from '../assets/mode.svg';

type ThemeMode = 'light' | 'dark';

const defaultTheme = (
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'dark' : 'light';

const initTheme = (localStorage.getItem('theme') ?? defaultTheme) as ThemeMode;

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(initTheme);

  // load saved theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // update document attribute and save to localStorage when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button id="theme-toggle" data-testid="theme-toggle" onClick={toggleTheme}>
      <img src={ModeIcon} />
    </button>
  );
};

export default ThemeToggle;
