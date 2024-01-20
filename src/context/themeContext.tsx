import * as React from 'react';

interface ThemeProps {
  children?: React.ReactNode;
}

// initialize theme based on user's device settings
const initTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const ThemeContext = React.createContext({
  theme: initTheme || 'light',
  updateTheme: (theme: string) => {}
});

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {

  const [theme, setTheme] = React.useState(initTheme);

  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
