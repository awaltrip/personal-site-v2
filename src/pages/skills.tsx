import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo, SkillsGrid } from '@components';
import * as globalStyles from '@styles/global.module.scss';

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Skills">
      <p>Here is the full list of my technical skills.</p>
      <p>
        Sort by:
        <select onChange={() => console.log('dropdown onChange') }>
          <option key="alphabetical" value="Alphabetical">
            Alphabetical
          </option>
          <option key="proficiencyLevel" value="Proficiency level">
            Proficiency level
          </option>
        </select>
      </p>
      <SkillsGrid />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Skills" />
);

export default SkillsPage;
