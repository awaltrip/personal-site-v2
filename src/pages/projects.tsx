import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Layout, Seo } from '@components';
import * as styles from '@styles/global.module.scss';

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout heading="Things I've built">
      <p>These are some of the web applications and software systems I've built from scratch.<br/><br/></p>
      <h2>Apple Wallet Insurance Card</h2>
      <p>
        Back-end Spring Boot (Java) service which generates a member's auto insurance card (Proof of Insurance)
        as an Apple Wallet pass and distributes the pass to a client application as a downloadable file. Cards include
        clickable links to member self-service pages on nationwide.com, or Nationwide mobile app if installed.
      </p>
      <ul className={styles.projectSkills}>
        <li>Spring Boot</li>
        <li>Apple Passkit</li>
        <li>Apigee</li>
        <li>Angular</li>
        <li>Docker</li>
        <li>K8s</li>
        <li>AWS</li>
      </ul>
      <br/><br/><p>(This page is a work in progress - more coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Projects" />
);

export default ProjectsPage;
