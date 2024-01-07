import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Projects I've worked on">
      <p>(Coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - Projects</title>
    <meta name="description" content="Anna Waltrip portfolio of projects"/>
  </>
);

export default ProjectsPage;
