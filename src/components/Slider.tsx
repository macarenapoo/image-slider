import * as React from 'react';
import * as cx from 'classnames';

import * as styles from './Slider.css';
import Slide from './Slide';

interface Props {
  images: string[];
  height?: string;
  width?: string;
  keepRatio?: boolean;
}

interface SlideType {
  id: number;
  image: string;
  shownCount: number;
}

interface OwnState {
  slides: SlideType[];
  currentSlide: number;
}

class Slider extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slides: this.getSlides(props.images),
      currentSlide: 0
    };
  }

  render() {
    const { height = '500px', width = '100vw', keepRatio = false } = this.props;
    const { slides, currentSlide } = this.state;
    const sliderStyles = {
      height,
      width
    };
    const containerStyles = {
      marginLeft: this.getOffset()
    };
    const prevClasses = cx({
      [styles.arrow]: true,
      [styles.prev]: true,
      [styles.disabled]: currentSlide === 0
    });
    const nextClasses = cx({
      [styles.arrow]: true,
      [styles.next]: true,
      [styles.disabled]: currentSlide === slides.length - 1
    });

    return (
      <div className={styles.slider} style={sliderStyles}>
        <div className={prevClasses} onClick={this.previousSlide.bind(this)}>
          Prev
        </div>
        <div className={nextClasses} onClick={this.nextSlide.bind(this)}>
          Next
        </div>
        <div className={styles.slidesContainer} style={containerStyles}>
          {slides.map((slide: SlideType) => (
            <Slide
              image={slide.image}
              width={width}
              height={height}
              keepRatio={keepRatio}
            />
          ))}
        </div>
      </div>
    );
  }

  private getSlides(images: string[]): SlideType[] {
    const slides = images.map((image, index) => {
      return {
        id: index,
        image,
        shownCount: 0
      };
    });
    return slides;
  }

  private getOffset() {
    const { width = '100vw' } = this.props;
    const value = parseInt(width);
    const units = () => {
      if (width.includes('px')) return 'px';
      if (width.includes('%')) return '%';
      return 'vw';
    };
    return `-${value * this.state.currentSlide}${units()}`;
  }

  private nextSlide() {
    this.setState({
      currentSlide: this.state.currentSlide + 1
    });
  }

  private previousSlide() {
    this.setState({
      currentSlide: this.state.currentSlide - 1
    });
  }
}

export default Slider;
