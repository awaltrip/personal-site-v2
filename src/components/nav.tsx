import * as React from 'react';
import { Link } from 'gatsby';
import * as globalStyles from '@styles/global.module.scss';

const navLinks = [
  {
    text: 'Home',
    url: '/'
  },
  {
    text: 'About',
    url: '/about'
  },
  {
    text: 'Skills',
    url: '/skills'
  },
  {
    text: 'Projects',
    url: '/projects'
  },
  {
    text: 'Contact',
    url: '/contact'
  }
];

const Nav: React.FC = () => {
  return (
    <nav className={globalStyles.container}>
      <ul className={globalStyles.navLinks}>
        {navLinks.map((navLink, i) =>
          <li className={globalStyles.navLinkItem} key={i}>
            <Link to={navLink.url} className={globalStyles.navLinkText}>
              {navLink.text}
            </Link>
          </li>
        )}
        <div className={globalStyles.navLinkItem}>
          <i className={`uil uil-moon ${globalStyles.themeBtn}`}></i>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
