import * as React from 'react';
import { ThemeContext } from '@context/themeContext';
import * as globalStyles from '@styles/global.module.scss';

const ThemeToggle: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, updateTheme }) => {

        // set data-theme attribute on body element -- see themes.scss
        document.body.dataset.theme = theme; 

        const iconName = (theme === 'light' ? 'uil-moon' : 'uil-sun');

        const changeTheme = () => {
          updateTheme(theme === 'light' ? 'dark' : 'light');
        };

        return (
          <div className={globalStyles.navLinkItem} onClick={changeTheme}>
            <i className={`uil ${iconName} ${globalStyles.themeBtn}`}></i>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;
