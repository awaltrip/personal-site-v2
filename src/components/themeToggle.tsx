import * as React from 'react';
import { useTheme } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';

const ThemeToggle: React.FC = () => {

  const { theme, updateTheme } = useTheme();
  const [icon, setIcon] = React.useState(theme === 'light' ? 'moon' : 'sun');

  React.useEffect(() => setIcon(theme === 'light' ? 'moon' : 'sun'), [theme]);

  const changeTheme = () => updateTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={styles.themeToggle}
      role="button"
      tabIndex={0}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={changeTheme}
      onKeyDown={event => { if (event.key === 'Enter') changeTheme(); }}
    >
      <i className={`uil uil-${icon}`}></i>
    </div>
  );
}

export default ThemeToggle;
