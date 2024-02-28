import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface CarouselProps {
  images: IGatsbyImageData[];
}

export const MOTION_VARIANTS = {
  ARROW: {
    hover: {
      scale: 1.2
    }
  },
  DOT: {
    initial: {
      y: 0
    },
    animate: {
      y: -10,
      scale: 1.3,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.3,
      transition: { duration: 0.3 }
    }
  },
  SLIDE: {
    hiddenRight: {
      x: '100%',
      y: '0',
      opacity: 0
    },
    hiddenLeft: {
      x: '-100%',
      y: '0',
      opacity: 0
    },
    visible: {
      x: '0',
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }
};
