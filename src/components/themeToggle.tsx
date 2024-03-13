import * as React from 'react';
import { ThemeContext } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';

const ThemeToggle: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, updateTheme }) => {

        console.log('THEME ', theme);

        const changeTheme = () => updateTheme(theme === 'light' ? 'dark' : 'light');

        return (
          <div className={styles.themeToggle}
            role="button"
            tabIndex={0}
            aria-label={`Toggle ${(theme as string) === 'light' ? 'dark' : 'light'} mode`}
            onClick={changeTheme}
            onKeyDown={event => { if (event.key === 'Enter') changeTheme(); }}
          >
            <i className={`uil ${(theme as string) === 'light' ? 'uil-moon' : 'uil-sun'}`}></i>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
