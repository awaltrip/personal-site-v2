import * as React from 'react';
import * as logos from '@images/logos';
import * as globalStyles from '@styles/global.module.scss';

interface Skill {
  name: string;
  proficiencyLevel?: number;
  url?: string;
}

interface Logos {
  [index: string]: string;
}

const skills: Skill[] = [
  {
    name: 'Angular',
    url: 'https://angular.io/'
  },
  {
    name: 'AWS Lambda',
    url: 'https://aws.amazon.com/'
  },
  {
    name: 'AWS S3',
    url: 'https://aws.amazon.com/'
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/'
  },
  {
    name: 'Gatsby',
    url: 'https://www.gatsbyjs.com/'
  },
  {
    name: 'Java',
    url: 'https://spring.io/projects/spring-boot/'
  }
];

const SkillsGrid: React.FC = () => {
  return (
    <div className={globalStyles.skillsGrid}>
      {skills.map((skill) =>
        <a className={globalStyles.skillBox} href={skill.url} target="_blank">
          <div className={globalStyles.skillBoxImg}>
            <img src={`${(logos as Logos)[skill.name.replace(/\s+/g, '')]}`} />
          </div>
          <span className={globalStyles.skillBoxLink}>
            {skill.name}
          </span>
        </a>
      )}
    </div>
  );
};

export default SkillsGrid;
