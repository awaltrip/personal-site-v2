import * as React from 'react';
import { Nav, ThemeToggle } from '@components';
import * as styles from '@styles/main.module.scss';

interface Props {
  heading: String;
  children?: any;
  headingAccent?: String;
}

const Layout: React.FC<Props> = ({ heading, children, headingAccent }) => {
  return (
    <>
      <header>
        <Nav />
        <ThemeToggle />
      </header>
      <main className={styles.container}>
        <h1 className={styles.heading}>
          {heading}
          <br />
          <span className={styles.headingAccent}>{headingAccent}</span>
        </h1>
        {children}
      </main>
      <footer className={styles.container}>
        <a className={styles.link} href="https://github.com/awaltrip/personal-site-v2" target="_blank">
          <i className={`uil uil-copyright`}></i> 2024 
          Designed & built by Anna Waltrip
        </a>
      </footer>
    </>
  );
};

export default Layout;
