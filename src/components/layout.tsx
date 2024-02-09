import * as React from 'react';
import { Nav, ThemeToggle } from '@components';
import * as globalStyles from '@styles/global.module.scss';

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
      <main className={globalStyles.container}>
        <h1 className={globalStyles.heading}>
          {heading}
          <br />
          <span className={globalStyles.headingAccent}>{headingAccent}</span>
        </h1>
        {children}
      </main>
      <footer className={globalStyles.container}>
        <a className={globalStyles.link} href="https://github.com/awaltrip/personal-site-v2" target="_blank">
          <i className={`uil uil-copyright`}></i> 2024 
          Designed & built by Anna Waltrip
        </a>
      </footer>
    </>
  );
};

export default Layout;
