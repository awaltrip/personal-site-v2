import * as React from 'react';

interface ThemeProps {
  children?: React.ReactNode;
}

type Theme = 'light' | 'dark';

let initTheme: Theme = 'dark';
if (typeof window !== 'undefined') {
  // initialize theme based on user's device settings
  initTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  // set initial data-theme attribute on body element -- see themes.scss
  document.body.dataset.theme = initTheme;
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
