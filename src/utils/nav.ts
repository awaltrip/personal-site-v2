import { graphql, useStaticQuery } from 'gatsby';
import { SVGMotionProps } from 'framer-motion';

export interface NavLink {
  name: string;
  path: string;
}

export interface NavToggleProps extends SVGMotionProps<SVGSVGElement> {
  isOpen: boolean;
}

export const LINE_PROPS = {
  stroke: 'currentColor',
  strokeWidth: 3,
  vectorEffect: 'non-scaling-stroke',
  initial: 'closed',
  transition: {
    ease: 'easeOut',
    duration: 0.3
  },
  strokeLinecap: 'round' as any
};

export const LINE_VARIANTS = {
  TOP: {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  },
  CENTER: {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  },
  BOTTOM: {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  }
};

export const NAV_VARIANTS = {
  NAV_LINK: {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  },
  NAV_LIST: {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1
      }
    }
  },
  NAV_TOGGLE: {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.2
      }
    }
  },
  THEME_TOGGLE: {
    hidden: { 
      opacity: 0,
      y: -200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.2
      }
    }
  },
  STATIC: {
    hidden: {
      opacity: 1,
      y: 0
    },
    show: { 
      opacity: 1,
      y: 0
    }
  }
};

export const getNavLinks = (): NavLink[] => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          navLinks {
            name
            path
          }
        }
      }
    }
  `);

  return site?.siteMetadata.navLinks;
};
