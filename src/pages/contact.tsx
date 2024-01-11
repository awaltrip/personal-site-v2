import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo } from '@components';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Contact me">
      <p>(Coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Contact" />
);

export default ContactPage;
