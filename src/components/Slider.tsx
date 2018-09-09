import * as React from 'react';

import * as styles from './Slider.css';
import Slide from './Slide';

const img1 = require('../images/coffee-777612_640.jpg');
const img2 = require('../images/coins-1523383_1920.jpg');
const img3 = require('../images/posing-999199_1920.jpg');
const img4 = require('../images/raspberries-1426859_1920.jpg');

const images = [img1, img2, img3, img4];

interface Props {
  height?: string;
  width?: string;
  keepRatio?: boolean;
}

interface OwnState {}

class Slider extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { height = '500px', width = '100%', keepRatio = false } = this.props;
    const sliderStyles = {
      height,
      width
    };
    return (
      <div style={sliderStyles}>
        <div className={styles.slidesContainer}>
          {images.map(image => (
            <Slide
              image={image}
              width={width}
              height={height}
              keepRatio={keepRatio}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
