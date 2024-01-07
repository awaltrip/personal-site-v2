import * as React from 'react';
import { Link } from 'gatsby';
import * as globalStyles from '@styles/global.module.scss';

interface Props {
  heading: String;
  children?: any;
  headingAccent?: String;
}

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
    url: '#'
  },
  {
    text: 'Projects',
    url: '#'
  },
  {
    text: 'Contact',
    url: '#'
  }
];

const Layout = ({ heading, children, headingAccent }: Props) => {
  return (
    <div>
      <header>
        <nav className={globalStyles.container}>
          <ul className={globalStyles.navLinks}>
            {navLinks.map((navLink, i) =>
              <li className={globalStyles.navLinkItem} key={i}>
                <Link to={navLink.url} className={globalStyles.navLinkText}>
                  {navLink.text}
                </Link>
              </li>
            )}
            <div className={globalStyles.navLinkItem}>
              <i className={`uil uil-moon ${globalStyles.navLinkText}`}></i>
            </div>
          </ul>
        </nav>
      </header>
      <main className={globalStyles.container}>
        <h1 className={globalStyles.heading}>
          {heading}
          <br />
          <span className={globalStyles.headingAccent}>{headingAccent}</span>
        </h1>
        <div>
          {children}
        </div>
      </main>
      <footer className={globalStyles.container}>
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </footer>
    </div>
  );
};

export default Layout;
