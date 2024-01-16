import * as React from 'react';
import skills from '@data/skills.json';
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

const SkillsGrid: React.FC = () => {
  return (
    <div className={globalStyles.skillsGrid}>
      {skills.map((skill: Skill) =>
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
