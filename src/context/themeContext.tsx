import * as React from 'react';

interface ThemeProps {
  children?: React.ReactNode;
}

type Theme = 'light' | 'dark';

const defaultTheme = 'dark';

export const ThemeContext = React.createContext({
  theme: defaultTheme,
  updateTheme: (theme: Theme) => {}
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {

  const [theme, setTheme] = React.useState(defaultTheme);

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.dataset.theme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
