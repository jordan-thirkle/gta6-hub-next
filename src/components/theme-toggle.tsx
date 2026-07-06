'use client';
import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('gta6-theme');
    if (stored === 'light') {
      setDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const theme = next ? '' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gta6-theme', theme || 'dark');
  };

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-surface transition-colors text-text-muted hover:text-text-main"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
    </button>
  );
}
