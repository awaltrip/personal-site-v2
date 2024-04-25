import * as React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { NavToggle, ThemeToggle } from '@components';
import { useTheme } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';
import * as utils from '@utils/nav';

const Nav: React.FC = () => {

  const { initialSiteLoad } = useTheme();
  const [showNav, setShowNav] = React.useState(false);

  if (typeof window !== 'undefined') window.onclick = (event: MouseEvent): void => {
    const nav = document.getElementById('nav');
    if (nav && showNav && !nav.contains(event.target as Node)) {
      event.preventDefault();
      setShowNav(false);
    }
  }

  const navVariants = {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const navLinkVariants = {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const themeToggleVariants = {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.2
      }
    }
  };

  const navToggleVariants = {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.2
      }
    }
  };

  const staticVariants = {
    hidden: {
      opacity: 1,
      y: 0
    },
    show: { 
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <nav id="nav" className={showNav ? styles.navShow : ''}>
        <motion.ul 
          className={styles.navLinks}
          variants={initialSiteLoad ? navVariants : staticVariants}
          initial="hidden"
          animate="show"
        >
          {utils.getNavLinks()?.map((navLink, i) =>
            <motion.li key={i}
              className={styles.navLinkItem} 
              variants={initialSiteLoad ? navLinkVariants : staticVariants}
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
        variants={initialSiteLoad ? themeToggleVariants : staticVariants}
        initial="hidden"
        animate="show"
      >
        <ThemeToggle />
      </motion.div>
      <motion.div 
        className={styles.navToggle} 
        onClick={(event) => { event.stopPropagation(); setShowNav(!showNav); }}
        style={showNav ? { position: 'fixed' } : {}}
        variants={initialSiteLoad ? navToggleVariants : staticVariants}
        initial="hidden"
        animate="show"
      >
        <NavToggle isOpen={showNav} />
      </motion.div>
    </>
  );
};

export default Nav;
