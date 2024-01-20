import * as React from 'react';

interface ThemeProps {
  children?: React.ReactNode;
}

type Theme = 'light' | 'dark';

// initialize theme based on user's device settings
let initTheme: Theme = 'light';
if (typeof window !== 'undefined') {
  initTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const ThemeContext = React.createContext({
  theme: initTheme,
  updateTheme: (theme: Theme) => {}
});

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {

  const [theme, setTheme] = React.useState(initTheme);

  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
