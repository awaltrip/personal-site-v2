import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout } from '@components';
import * as globalStyles from '@styles/global.module.scss';

const skills = [
  {
    text: 'Angular (TypeScript)',
    url: 'https://angular.io/'
  },
  {
    text: 'Spring Boot (Java)',
    url: 'https://spring.io/projects/spring-boot/'
  },
  {
    text: 'React / Gatsby (TS)',
    url: 'https://www.gatsbyjs.com/'
  },
  {
    text: 'Node.js (JS / TS)',
    url: 'https://nodejs.org/en'
  },
  {
    text: 'Docker + Kubernetes',
    url: 'https://www.atlassian.com/microservices/microservices-architecture/kubernetes-vs-docker'
  },
  {
    text: 'AWS - Lambda, S3, + more',
    url: 'https://aws.amazon.com/'
  }
];

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="About me">
      <p>Hi there! My name is Anna and I love to build delightful user experiences on the internet.</p>
      <p>
        My interest in coding began back in the heydays of MySpace and Tumblr, creating my own custom profile themes.
        Engineering wasn't on my radar when I entered college, but I eventually connected the dots of my experiences,
        strengths, and interests and enrolled in Tech Elevator in 2017.
      </p>
      <p>
        After Tech Elevator, I've had the privilege of working for Nationwide and being twice promoted up to a Pod Lead role on an 
        Agile Innovation team. (Note: "pod" here means a small autonomous group within a larger team.)
      </p>
      <p>
        Here are some of the technologies I've worked with:
      </p>
      <ul className={globalStyles.list}>
        {skills.map((skill, i) =>
          <li className={globalStyles.listItem} key={i}>
            <a className={globalStyles.link} href={skill.url}>{skill.text}</a>
          </li>
        )}
      </ul>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <>
    <title>Anna Waltrip Portfolio Site - About</title>
    <meta name="description" content="About Anna Waltrip"/>
  </>
);

export default AboutPage;
