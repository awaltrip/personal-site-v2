import * as React from 'react';
import { motion } from 'framer-motion';
import { NavToggleProps, LINE_PROPS, LINE_VARIANTS } from '@utils/nav';

const NavToggle: React.FC<NavToggleProps> = ({ isOpen = false, ...props }) => {
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
        animate={isOpen ? 'opened' : 'closed'}
        variants={LINE_VARIANTS.TOP}
        {...LINE_PROPS}
      />
      <motion.line
        x1="0" x2="4" y1="2" y2="2"
        animate={isOpen ? 'opened' : 'closed'}
        variants={LINE_VARIANTS.CENTER}
        {...LINE_PROPS}
      />
      <motion.line
        x1="0" x2="4" y1="4" y2="4"
        animate={isOpen ? 'opened' : 'closed'}
        variants={LINE_VARIANTS.BOTTOM}
        {...LINE_PROPS}
      />
    </motion.svg>
  );
};

export default NavToggle;
