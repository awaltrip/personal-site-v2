import * as React from 'react';
import { motion } from 'framer-motion';
import { Nav } from '@components';
import { useTheme } from '@context/themeContext';
import * as styles from '@styles/main.module.scss';
import { LayoutProps, LAYOUT_VARIANTS } from '@utils/layout';

const Layout: React.FC<LayoutProps> = ({ heading, headingAccent, children }) => {

  const { initialSiteLoad } = useTheme();

  return (
    <>
      <header>
        <Nav />
      </header>
      <motion.main
        className={styles.container}
        variants={LAYOUT_VARIANTS.MAIN}
        initial="hidden"
        animate={initialSiteLoad ? 'showInitial' : 'show'}
        exit="exit"
      >
        <motion.h1 className={styles.heading} variants={LAYOUT_VARIANTS.MAIN_CHILD}>
          {heading}<br />
          <span className={styles.headingAccent}>{headingAccent}</span>
        </motion.h1>
        <motion.div variants={LAYOUT_VARIANTS.MAIN_CHILD}>
          {children}
        </motion.div>
      </motion.main>
      <motion.footer
        className={styles.container}
        variants={LAYOUT_VARIANTS.FOOTER}
        initial="hidden"
        animate={initialSiteLoad ? 'showInitial' : 'show'}
        exit="exit"
      >
        <a className={styles.link} href="https://github.com/awaltrip/personal-site-v2" target="_blank">
          <i className={`uil uil-copyright`}></i> 2024 Designed & built by Anna Waltrip
        </a>
      </motion.footer>
    </>
  );
};

export default Layout;
