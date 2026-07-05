import { createContext, useContext, useEffect, useState, useCallback } from 'react';

/**
 * Nexus theme system.
 * - theme:  'dark' | 'light'
 * - accent: 'violet' | 'emerald' | 'orange'
 * Both are written to <html data-theme data-accent> and persisted to
 * localStorage, so every screen and every tab stays in sync.
 */
const ThemeContext = createContext(null);

const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => read('nx-theme', 'dark'));
  const [accent, setAccent] = useState(() => read('nx-accent', 'violet'));

  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute('data-theme', theme);
    el.setAttribute('data-accent', accent);
    try {
      localStorage.setItem('nx-theme', theme);
      localStorage.setItem('nx-accent', accent);
    } catch {
      /* storage unavailable */
    }
  }, [theme, accent]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, accent, setTheme, setAccent, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>');
  return ctx;
}

/** Read a resolved CSS variable at runtime (used to theme charts). */
export function cssVar(name) {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
