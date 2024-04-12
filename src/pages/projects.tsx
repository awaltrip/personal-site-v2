import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image';
import DOMPurify from 'isomorphic-dompurify';
import { AnimatePresence, motion } from 'framer-motion';
import { Carousel, Layout, Seo } from '@components';
import * as styles from '@styles/main.module.scss';
import * as utils from '@utils/projects';

const ProjectsPage: React.FC<PageProps> = () => {

  const projects = utils.getProjectData();
  const modalsClosed = Array(projects.length).fill(false);

  const [isModalOpen, setIsModalOpen] = React.useState(modalsClosed);

  const handleOpenModal = (event: React.MouseEvent, index: number): void => { 
    event.stopPropagation(); 
    setIsModalOpen(isModalOpen.map((_, i) => index === i));
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onclick = (event: MouseEvent): void => {
        const modal = document.getElementById('modal');
        if (modal && !modal.contains(event.target as Node)) {
          event.preventDefault();
          setIsModalOpen(modalsClosed);
        }
      };
    }
  });

  return (
    <Layout heading="Things I've built">
      <p>These are some of the web applications and software systems I've built from scratch.<br/><br/></p>
      {projects && projects.map((project, i) => (
        <section key={i} role="contentinfo"
          aria-labelledby={project.frontmatter.id}
          className={styles.projectSection}
        >
          <div className={styles.projectContent}>
            <h2 id={project.frontmatter.id}>
              {project.frontmatter.title}
            </h2>
            <p className={styles.projectDescription}
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(project.body)}}
            >
            </p>
            <ul className={styles.projectSkills}>
              {project.frontmatter.skills?.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
            <p className={styles.projectLinks}>
              <a href={project.frontmatter.github} target="_blank">
                <i className="uil uil-github-alt"></i>
              </a>
              <a href={project.frontmatter.external} rel="noopener noreferrer" target="_blank">
                <i className="uil uil-external-link-alt"></i>
              </a>
            </p>
          </div>
          <div className={styles.projectImg} onClick={(event) => handleOpenModal(event, i)}>
            <div className={styles.projectImgOverlay}></div>
            <GatsbyImage
              alt={`${project.frontmatter.title} screenshot`}
              image={(getImage(project.frontmatter.images?.[0]) as IGatsbyImageData)}
            />
          </div>
          <AnimatePresence>
            {isModalOpen[i] && (<motion.div
              id="modal"
              className={styles.modal}
              variants={utils.MODAL_VARIANTS}
              initial="bottom"
              animate="visible"
              exit="exit"
            >
              <div className={styles.modalContent}>
                <i className={`uil uil-times ${styles.modalClose}`} onClick={() => setIsModalOpen(modalsClosed)}></i>
                <Carousel imageData={project.frontmatter.images} />
              </div>
            </motion.div>)}
          </AnimatePresence>
        </section>
      ))}
      <br/><br/><p>(This page is a work in progress - more coming soon)</p>
    </Layout>
  );
};

export const Head: HeadFC = () => (
  <Seo pageName="Projects" />
);

export default ProjectsPage;
