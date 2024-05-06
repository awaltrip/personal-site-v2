import * as React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { NavToggle, ThemeToggle } from '@components';
import { useTheme } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';
import { NAV_VARIANTS, getNavLinks } from '@utils/nav';

const Nav: React.FC = () => {

  const { initialSiteLoad } = useTheme();
  const [showNav, setShowNav] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onclick = (event: MouseEvent): void => {
        const nav = document.getElementById('nav');
        if (nav && showNav && !nav.contains(event.target as Node)) {
          event.preventDefault();
          setShowNav(false);
        }
      };
    }
  });

  return (
    <>
      <nav id="nav" className={showNav ? styles.navShow : ''}>
        <motion.ul 
          className={styles.navLinks}
          variants={initialSiteLoad ? NAV_VARIANTS.NAV_LIST : NAV_VARIANTS.STATIC}
          initial="hidden"
          animate="show"
        >
          {getNavLinks()?.map((navLink, i) =>
            <motion.li key={i}
              className={styles.navLinkItem} 
              variants={initialSiteLoad ? NAV_VARIANTS.NAV_LINK : NAV_VARIANTS.STATIC}
            >
              <Link to={navLink.path} className={styles.navLinkText} onClick={() => setShowNav(false)}>
                {navLink.name}
              </Link>
            </motion.li>
          )}
        </motion.ul>
      </nav>
      <motion.div 
        className={styles.themeToggle} 
        style={showNav ? { margin: 'auto 62px' } : {}}
        variants={initialSiteLoad ? NAV_VARIANTS.THEME_TOGGLE : NAV_VARIANTS.STATIC}
        initial="hidden"
        animate="show"
      >
        <ThemeToggle />
      </motion.div>
      <motion.div 
        className={styles.navToggle} 
        onClick={(event) => { event.stopPropagation(); setShowNav(!showNav); }}
        style={showNav ? { position: 'fixed' } : {}}
        variants={initialSiteLoad ? NAV_VARIANTS.NAV_TOGGLE : NAV_VARIANTS.STATIC}
        initial="hidden"
        animate="show"
      >
        <NavToggle isOpen={showNav} />
      </motion.div>
    </>
  );
};

export default Nav;
