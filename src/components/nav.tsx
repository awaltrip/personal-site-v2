import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from '@styles/main.module.scss';

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
    <nav>
      <ul className={styles.navLinks}>
        {navLinks.map((navLink, i) =>
          <li className={styles.navLinkItem} key={i}>
            <Link to={navLink.url} className={styles.navLinkText}>
              {navLink.text}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
