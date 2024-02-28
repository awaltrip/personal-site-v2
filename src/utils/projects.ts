import { graphql, useStaticQuery } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

export interface Edge {
  node: {
    id: string;
    name: string;
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    }
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

export const getImageData = (): Edge[] => {
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
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  return data?.allFile.edges;
};

export const getImages = (): IGatsbyImageData[] => {
  const imageEdges = getImageData();
  const images = imageEdges?.sort((a, b) => (a.node?.name > b.node?.name) ? 1 : -1)
    .map((edge: Edge) => getImage(edge.node))
    .filter(image => typeof image !== 'undefined');
  return (images as IGatsbyImageData[]) || [];
};
