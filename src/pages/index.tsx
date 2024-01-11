import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo }  from '@components';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Hi, my name is" headingAccent="Anna Waltrip">
      <p>I'm a full-stack software engineer specializing in building exceptional user experiences on the web.</p>
      <p>This site is currently under construction, but you can check out the navigation links above.</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Home" />
);

export default IndexPage;
