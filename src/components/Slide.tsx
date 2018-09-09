import * as React from 'react';

import * as styles from './Slide.css';

interface Props {
  image: string;
  width: string;
  height: string;
  keepRatio: boolean;
}

const Slide = ({
  image,
  width = '100vw',
  height = '500px',
  keepRatio
}: Props) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
    height,
    width
  };
  return <div className={styles.slide} style={slideStyles} />;
};

export default Slide;
