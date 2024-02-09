import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo } from '@components';
import skills from '@data/aboutSkills.json';
import * as styles from '@styles/global.module.scss';

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="About me">
      <p>Hi there! I'm Anna and I love to build things on the web.</p>
      <p>
        My interest in coding began back in the heydays of MySpace and Tumblr, creating my own custom profile themes.
        Engineering wasn't on my radar when I entered college, but I eventually connected the dots of my experiences,
        strengths, and interests and enrolled in Tech Elevator in 2017.
      </p>
      <p>
        After Tech Elevator, I had the privilege of working for over 5 years at a Fortune 100 company on an Agile 
        Innovation team, and being twice promoted up to a Pod Lead role. (Note: "pod" here means a small autonomous 
        group within a larger team.)
      </p>
      <p>
        Here are some of the technologies I've worked with:
      </p>
      <ul className={styles.list}>
        {skills.map((skill, i) =>
          <li className={styles.listItem} key={i}>
            <a className={styles.link} href={skill.url} target="_blank">{skill.text}</a>
          </li>
        )}
      </ul>
      <p>
        When I'm not coding, I love traveling and doing things outdoors. I'm a weight-lifting enthusiast, having been
        in my university's Powerlifting Club in the past. I've also been running my own side business as a pedicab 
        (bike taxi) driver for over a decade - a great way to make a little extra cash and stay in shape!
      </p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="About" />
);

export default AboutPage;
