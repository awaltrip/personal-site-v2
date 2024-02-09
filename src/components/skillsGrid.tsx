import * as React from 'react';
import skills from '@data/skills.json';
import * as logos from '@images/logos';
import * as styles from '@styles/global.module.scss';

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
    <div className={styles.skillsGrid}>
      {skills.map((skill: Skill, i: number) =>
        <a className={styles.skillBox} href={skill.url} target="_blank" key={i}>
          <div className={styles.skillBoxImg}>
            <img alt={`${skill.name} logo`}
              src={`${(logos as Logos)[skill.name.replace(/\s+/g, '')]}`}
            />
          </div>
          <span className={styles.skillBoxLink}>
            {skill.name}
          </span>
        </a>
      )}
    </div>
  );
};

export default SkillsGrid;
