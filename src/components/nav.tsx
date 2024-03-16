import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
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
  return (
    <nav>
      <ul className={styles.navLinks}>
        {getNavLinks()?.map((navLink, i) =>
          <li className={styles.navLinkItem} key={i}>
            <Link to={navLink.path} className={styles.navLinkText}>
              {navLink.name}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
