import * as React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface NavToggleProps extends SVGMotionProps<SVGSVGElement> {
  isOpen: boolean;
}

const NavToggle: React.FC<NavToggleProps> = ({ isOpen = false, ...props }) => {
  const variant = isOpen ? 'opened' : 'closed';
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  };
  const lineProps = {
    stroke: 'currentColor',
    strokeWidth: 3,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: {
      ease: 'easeOut',
      duration: 0.3
    },
    strokeLinecap: 'round' as any
  };

  return (
    <motion.svg
      viewBox="0 0 4 4"
      overflow="visible"
      preserveAspectRatio="none"
      width="30"
      height="26"
      {...props}
    >
      <motion.line
        x1="0" x2="4" y1="0" y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0" x2="4" y1="2" y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0" x2="4" y1="4" y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default NavToggle;
