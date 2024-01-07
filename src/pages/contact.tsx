import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Contact me">
      <p>(Coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - Contact</title>
    <meta name="description" content="Contact Anna Waltrip"/>
  </>
);

export default ContactPage;
