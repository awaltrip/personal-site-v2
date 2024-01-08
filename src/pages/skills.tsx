import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';
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
