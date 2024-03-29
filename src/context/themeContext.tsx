import * as React from 'react';

interface ThemeProps {
  children?: React.ReactNode;
}

type Theme = 'light' | 'dark';

const initTheme = (typeof localStorage !== 'undefined' && localStorage.getItem('awTheme') as Theme) || 'dark';
if (typeof document !== 'undefined') document.body.dataset.theme = initTheme;

export const ThemeContext = React.createContext({
  theme: initTheme,
  updateTheme: (theme: Theme) => {}
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {

  const [theme, setTheme] = React.useState(initTheme);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.dataset.theme = theme;
      localStorage.setItem('awTheme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
