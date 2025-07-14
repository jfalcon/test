import React, { useState, useLayoutEffect } from 'react';

import ModeIcon from '@/assets/mode.svg';
import '@/styles/components/Theme.scss';

export type ThemeMode = 'light' | 'dark';

const defaultTheme = (
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
) ? 'dark' : 'light';

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('theme') as ThemeMode) ?? defaultTheme;
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button id="theme" data-testid="theme" onClick={toggleTheme}>
      <img src={ModeIcon} />
    </button>
  );
};

export default Theme;
