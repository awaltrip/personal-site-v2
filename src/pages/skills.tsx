import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo } from '@components';
import * as Logos from '@images/logos'
import * as globalStyles from '@styles/global.module.scss';

interface Skill {
  name: string;
  image?: React.ReactElement;
  proficiencyLevel?: number;
  url?: string;
}

const skills: Skill[] = [
  {
    name: 'Angular',
    image: <Logos.Angular/>,
    url: 'https://angular.io/'
  },
  {
    name: 'AWS Lambda',
    image: <Logos.Angular/>,
    url: 'https://aws.amazon.com/'
  },
  {
    name: 'AWS S3',
    image: <Logos.Angular/>,
    url: 'https://aws.amazon.com/'
  },
  {
    name: 'Docker',
    image: <Logos.Angular/>,
    url: 'https://www.docker.com/'
  },
  {
    name: 'Gatsby',
    image: <Logos.Angular/>,
    url: 'https://www.gatsbyjs.com/'
  },
  {
    name: 'Java',
    image: <Logos.Angular/>,
    url: 'https://spring.io/projects/spring-boot/'
  },
];

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
      <div className={globalStyles.skillsGrid}>
        {skills.map((skill) =>
          <a className={globalStyles.skillBox} href={skill.url} target="_blank">
            <div className={globalStyles.skillBoxImg}>
              {skill.image}
            </div>
            <span className={globalStyles.skillBoxLink}>
              {skill.name}
            </span>
          </a>
        )}
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Skills" />
);

export default SkillsPage;
