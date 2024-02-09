import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo, SkillsGrid } from '@components';

const SkillsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Skills">
      <p>Here is the full list of my technical skills.</p>
      <label>
        Sort skills by:
        <select onChange={() => console.log('dropdown onChange') }>
          <option key="alphabetical" value="Alphabetical">
            Alphabetical
          </option>
          <option key="proficiencyLevel" value="Proficiency level">
            Proficiency level
          </option>
        </select>
      </label>
      <SkillsGrid />
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Skills" />
);

export default SkillsPage;
