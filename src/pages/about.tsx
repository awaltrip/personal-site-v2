import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="About me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - About</title>
    <meta name="description" content="About Anna Waltrip"/>
  </>
);

export default AboutPage;
