import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo } from '@components';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Projects I've worked on">
      <p>(Coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Projects" />
);

export default ProjectsPage;
