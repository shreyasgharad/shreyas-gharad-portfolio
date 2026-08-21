
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  scrolled?: boolean;
}

const ThemeToggle = ({ scrolled }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid a flash of the wrong icon before the theme is read from storage
  useEffect(() => setMounted(true), []);

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 hover:scale-105 active:scale-90 ${
        scrolled
          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
      }`}
    >
      {mounted && (isDark ? <Sun size={18} /> : <Moon size={18} />)}
    </button>
  );
};

export default ThemeToggle;
