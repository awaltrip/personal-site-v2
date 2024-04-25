import * as React from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@components';
import { useTheme } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';

interface Props {
  heading: String;
  children?: any;
  headingAccent?: String;
}

const Layout: React.FC<Props> = ({ heading, children, headingAccent }) => {

  const { initialSiteLoad } = useTheme();

  const mainVariants = {
    hidden: { 
      opacity: 0,
      y: 200
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: initialSiteLoad ? 0.8 : 0,
        duration: 0.2,
        staggerChildren: initialSiteLoad ? 1 : 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const footerVariants = {
    hidden: { 
      opacity: 0,
      y: 200
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: initialSiteLoad ? 1.2 : 0.4,
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };
  
  const mainChild = {
    hidden: { 
      opacity: 0,
      y: 200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <motion.main
        variants={mainVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.container}
      >
        <motion.h1 
          variants={mainChild} 
          className={styles.heading}
        >
          {heading}<br />
          <span className={styles.headingAccent}>{headingAccent}</span>
        </motion.h1>
        <motion.div variants={mainChild}>
          {children}
        </motion.div>
      </motion.main>
      <motion.footer 
        variants={footerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className={styles.container}
      >
        <a className={styles.link} href="https://github.com/awaltrip/personal-site-v2" target="_blank">
          <i className={`uil uil-copyright`}></i> 2024 
          Designed & built by Anna Waltrip
        </a>
      </motion.footer>
    </>
  );
};

export default Layout;
