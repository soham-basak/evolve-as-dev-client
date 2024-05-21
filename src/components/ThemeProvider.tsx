import { createContext, useContext, useLayoutEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';
type SystemTheme = 'light' | 'dark' | null;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  systemTheme: SystemTheme;
  resolvedTheme: Theme | null;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: 'system',
  systemTheme: null,
  resolvedTheme: null,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const savedTheme = (localStorage.getItem(storageKey) as Theme) ?? 'system';
  const [theme, setTheme] = useState<Theme>(savedTheme || defaultTheme);
  const [systemTheme, setSystemTheme] = useState<SystemTheme>(
    (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light') || null
  );

  useLayoutEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      setSystemTheme(systemTheme);
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    systemTheme,
    resolvedTheme: savedTheme === 'system' ? systemTheme : savedTheme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
