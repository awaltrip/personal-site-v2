import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo }  from '@components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Hi, my name is" headingAccent="Anna Waltrip.">
      <p>I'm a full-stack software engineer with a passion for building scalable systems and exceptional user experiences.</p>
      <p>This site is currently a work in progress, but you can check out the navigation links above.</p>
      <p>Features coming soon:</p>
      <ul>
        <li>Mobile view</li>
        <li>Contact form</li>
        <li>Additional projects</li>
        <li>Sorting features on skills page</li>
        <li>A few more themes beyond "light" and "dark"</li>
        <li>Site logo and improved styles</li>
      </ul>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Home" />
);

export default IndexPage;
