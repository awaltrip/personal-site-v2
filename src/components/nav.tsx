import * as React from 'react';
import { Link } from 'gatsby';
import { NavToggle, ThemeToggle } from '@components';
import * as styles from '@styles/main.module.scss';
import * as utils from '@utils/nav';

const Nav: React.FC = () => {
  const [showNav, setShowNav] = React.useState(false);

  if (typeof window !== 'undefined') window.onclick = (event: MouseEvent): void => {
    const nav = document.getElementById('nav');
    if (nav && showNav && !nav.contains(event.target as Node)) {
      event.preventDefault();
      setShowNav(false);
    }
  }

  return (
    <>
      <nav id="nav" className={showNav ? styles.navShow : ''}>
        <ul className={styles.navLinks}>
          {utils.getNavLinks()?.map((navLink, i) =>
            <li className={styles.navLinkItem} key={i}>
              <Link to={navLink.path} className={styles.navLinkText} onClick={() => setShowNav(false)}>
                {navLink.name}
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.themeToggle} style={showNav ? { margin: 'auto 62px' } : {}}>
        <ThemeToggle />
      </div>
      <div className={styles.navToggle} 
        onClick={(event) => { event.stopPropagation(); setShowNav(!showNav); }}
        style={showNav ? { position: 'fixed' } : {}}
      >
        <NavToggle isOpen={showNav} />
      </div>
    </>
  );
};

export default Nav;
