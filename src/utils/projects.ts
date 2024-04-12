import { graphql, useStaticQuery } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

export interface ProjectNode {
  body: any;
  frontmatter: {
    date: number;
    external: string;
    github: string;
    id: string;
    title: string;
    skills: string[];
    images: ImageDataLike[];
  }
}

export const MODAL_VARIANTS = {
  bottom: {
    y: '-100%',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export const getProjectData = (): ProjectNode[] => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { frontmatter: { date: ASC }}) {
        nodes {
          body
          frontmatter {
            date
            external
            github
            id
            title
            skills
            images {
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  `);

  return (data as any)?.allMdx?.nodes;
};
