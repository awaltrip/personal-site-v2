import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { ThemeToggle } from '@components';
import * as styles from '@styles/main.module.scss';

interface NavLink {
  name: string;
  path: string;
}

const getNavLinks = (): NavLink[] => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navLinks {
            name
            path
          }
        }
      }
    }
  `);

  return site?.siteMetadata.navLinks;
};

const Nav: React.FC = () => {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <>
      <nav className={showNav ? styles.navShow : ''}>
        <ul className={styles.navLinks}>
          {getNavLinks()?.map((navLink, i) =>
            <li className={styles.navLinkItem} key={i}>
              <Link to={navLink.path} className={styles.navLinkText} onClick={() => setShowNav(false)}>
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
        <i className={`uil uil-times ${styles.navClose}`}
          style={showNav ? {} : {display: 'none'}}
          onClick={() => setShowNav(false)}
        ></i>
      </nav>
      <ThemeToggle />
      <div className={styles.navToggle} onClick={() => setShowNav(true)}>
        <i className="uil uil-bars"></i>
      </div>
    </>
  );
};

export default Nav;
