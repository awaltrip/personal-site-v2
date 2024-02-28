import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { AnimatePresence, motion } from 'framer-motion';
import * as styles from '@styles/main.module.scss';
import { CarouselProps, MOTION_VARIANTS } from '@utils/carousel';

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState('left');

  const handleNext = (): void => {
    setDirection('right');
    setIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1);
  };
  const handlePrevious = (): void => {
    setDirection('left');
    setIndex((prevIndex) => prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1);
  };
  const handleDotClick = (i: number): void => {
    setDirection(i > index ? 'right' : 'left');
    setIndex(i);
  };

  return (
    <div className={styles.carousel}>
      <AnimatePresence>
        <motion.div
          key={index}
          variants={MOTION_VARIANTS.SLIDE}
          initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
          animate="visible"
          exit="exit"
        >
          <GatsbyImage className={styles.carouselImage}
            alt="project"
            key={index}
            image={images[index]}
          />
        </motion.div>
      </AnimatePresence>
      <div className={styles.carouselDirections}>
        <motion.div 
          className={styles.carouselLeft}
          onClick={handlePrevious}
          variants={MOTION_VARIANTS.ARROW}
          whileHover="hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </motion.div>
        <motion.div 
          className={styles.carouselRight} 
          onClick={handleNext}
          variants={MOTION_VARIANTS.ARROW}
          whileHover="hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </motion.div>
      </div>
      <div className={styles.carouselIndicators}>
        {images.map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.dot} ${index === i ? styles.active : ''}`}
            onClick={() => handleDotClick(i)}
            variants={MOTION_VARIANTS.DOT}
            initial="initial"
            animate={index === i ? 'animate' : ''}
            whileHover="hover"
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
