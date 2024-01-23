import * as React from 'react';
import { ThemeContext } from '@context/themeContext';
import * as globalStyles from '@styles/global.module.scss';

const ThemeToggle: React.FC = () => {

  const [iconName, setIconName] = React.useState('uil-sun');

  return (
    <ThemeContext.Consumer>
      {({ theme, updateTheme }) => {

        if (typeof document !== 'undefined') document.body.dataset.theme = theme;
        
        setIconName(theme === 'light' ? 'uil-moon' : 'uil-sun');

        const changeTheme = () => {
          updateTheme(theme === 'light' ? 'dark' : 'light');
          setIconName(theme === 'light' ? 'uil-moon' : 'uil-sun');
        };

        return (
          <div className={globalStyles.themeToggle}
            role="button"
            tabIndex={0}
            aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
            onClick={changeTheme}
            onKeyDown={event => { if (event.key === 'Enter') changeTheme(); }}
          >
            <i className={`uil ${iconName}`}></i>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
