import * as React from 'react';
import { graphql, useStaticQuery, type HeadFC, type PageProps } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Layout, Seo } from '@components';
import * as styles from '@styles/global.module.scss';

interface Edge {
  node: {
    id: string;
    name: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    }
  }
}

const getImageData = (): Edge[] => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)/" },
          relativeDirectory: { eq: "projects" }  # relative to src/images per gatsby-config
        }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              gatsbyImageData(transformOptions: {fit: FILL})
            }
          }
        }
      }
    }
  `);
  console.log('GRAPHQL DATA: ', data);
  return data?.allFile.edges;
};

const getImages = (): IGatsbyImageData[] => {
  const imageEdges = getImageData();
  const images = imageEdges?.map((edge: Edge) => getImage(edge.node))
    .filter(image => typeof image != 'undefined');
  return (images as IGatsbyImageData[]) || [];
};

const ProjectsPage: React.FC<PageProps> = () => {
  const images = getImages();

  return (
    <Layout heading="Things I've built">
      <p>These are some of the web applications and software systems I've built from scratch.<br/><br/></p>
      <h2>Apple Wallet Insurance Card</h2>
      <p>
        Back-end Spring Boot (Java) service which generates a member's auto insurance card (Proof of Insurance)
        as an Apple Wallet pass and distributes the pass to a client application as a downloadable file. Pass 
        includes clickable links which route to the Nationwide website or mobile app depending if app is installed
        on user's device.
      </p>
      <ul className={styles.projectSkills}>
        <li>Spring Boot</li>
        <li>Apple Passkit</li>
        <li>Apigee</li>
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
