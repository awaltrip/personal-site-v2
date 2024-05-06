export interface LayoutProps {
  heading: String;
  children?: any;
  headingAccent?: String;
}

export const LAYOUT_VARIANTS = {
  FOOTER: {
    hidden: { 
      opacity: 0,
      y: 200
    },
    showInital: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.2
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  },
  MAIN: {
    hidden: { 
      opacity: 0,
      y: 200
    },
    showInitial: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.2,
        staggerChildren: 1
      }
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        duration: 0.2,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  },
  MAIN_CHILD: {
    hidden: { 
      opacity: 0,
      y: 200
    },
    show: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  }
};
