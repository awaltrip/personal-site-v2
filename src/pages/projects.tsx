import * as React from 'react';
import { graphql, useStaticQuery, type HeadFC, type PageProps } from 'gatsby';
import { getImage, GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Carousel, Layout, Seo } from '@components';
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

const openModal = (): void => {
  document.getElementById('modal')!.style.display = 'block';
};

const closeModal = (): void => {
  document.getElementById('modal')!.style.display = 'none';
}

window.onclick = (event): void => {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal!.style.display = 'none';
  }
}

const ProjectsPage: React.FC<PageProps> = () => {
  const images = getImages();

  return (
    <Layout heading="Things I've built">
      <p>These are some of the web applications and software systems I've built from scratch.<br/><br/></p>
      <section role="contentinfo" aria-labelledby="project" className={styles.projectSection}>
        <div className={styles.projectContent}>
          <h2 id="project">Apple Wallet Insurance Card</h2>
          <p className={styles.projectDescription}>
            Back-end Spring Boot (Java) service which generates a member's auto insurance card (Proof of Insurance) 
            as an Apple Wallet pass and distributes the pass to a client application as a downloadable file. Pass 
            includes clickable links which route to the Nationwide website or mobile app depending if app is installed
            on user's device.<br/><br/>
            All code, design, and logos used in this project are owned by <a className={styles.link} target="_blank" 
              href="https://www.nationwide.com/">Nationwide</a>.
          </p>
          <ul className={styles.projectSkills}>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Apple Passkit</li>
            <li>Apigee</li>
            <li>Docker</li>
            <li>K8s</li>
            <li>AWS</li>
          </ul>
          <p className={styles.projectLinks}>
            <a href="#">
              <i className={`uil uil-github-alt`}></i>
            </a>
            <a href="https://policyservicing.nationwide.com/#/qid/search" target="_blank">
              <i className={`uil uil-external-link-alt`}></i>
            </a>
          </p>
        </div>
        <div className={styles.projectImg} onClick={openModal}>
          <div className={styles.projectImgOverlay}></div>
          <GatsbyImage
            alt="project"
            image={images[0]}
          />
        </div>
        <div id="modal" className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.modalClose} onClick={closeModal}>&times;</span>
            <Carousel images={images} />
          </div>
        </div>
      </section>
      <br/><br/><p>(This page is a work in progress - more coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Projects" />
);

export default ProjectsPage;
