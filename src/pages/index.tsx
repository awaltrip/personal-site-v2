import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo }  from '@components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Hi, my name is" headingAccent="Anna Waltrip">
      <p>I'm a full-stack software engineer specializing in building exceptional user experiences on the web.</p>
      <p>This site is currently a work in progress, but you can check out the navigation links above.</p>
      <p>Features coming soon:
        <ul>
          <li>Projects page</li>
          <li>Contact form</li>
          <li>Sort feature on skills page</li>
          <li>Dark / light themes</li>
          <li>Mobile view</li>
        </ul>
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Home" />
);

export default IndexPage;
