import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Skills">
      <p>Here is the full list of my skills.</p>
      <p>Sort by: (Alphabetical | Proficiency level)</p>
      <p>(Coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - Skills</title>
    <meta name="description" content="Anna Waltrip skills"/>
  </>
);

export default SkillsPage;
