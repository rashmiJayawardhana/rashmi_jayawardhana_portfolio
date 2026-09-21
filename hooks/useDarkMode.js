import { useEffect, useState } from 'react';

// Owns the theme: light by default, dark only after the visitor clicks the toggle. The choice is remembered.
export default function useDarkMode() {
  // Starts false on both server and client so the first render matches the prerendered HTML.
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // The operating system's colour preference is deliberately ignored; only an explicit toggle enables dark mode.
    setIsDarkMode(localStorage.theme === 'dark');
  }, []);

  useEffect(() => {
    // Tailwind is configured with darkMode: 'selector', so every dark: utility keys off this class on <html>.
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
