import * as React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from '@styles/global.module.scss';

interface CarouselProps {
  images: IGatsbyImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {

  const [index, setIndex] = React.useState(0);

  const handleNext = () => setIndex((prevIndex) => prevIndex + 1 === images.length ? 0 : prevIndex + 1);
  const handlePrevious = () => setIndex((prevIndex) => prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1);
  const handleDotClick = (i: number) => setIndex(i);

  return (
    <div className="carousel">
      <GatsbyImage className={styles.projectImage}
        alt="project"
        key={index}
        image={images[index]}
      />
      <div className="carousel-directions">
        <div className="carousel-left" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="carousel-right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="carousel-indicators">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${index === i ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
