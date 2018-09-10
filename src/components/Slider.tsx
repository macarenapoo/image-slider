import * as React from 'react';
import * as cx from 'classnames';

import * as styles from './Slider.css';
import Slide from './Slide';
import Icon from './Icon';
import Navigation from './Navigation';

const arrow = require('../images/arrow.svg');

interface Props {
  images: string[];
  height?: string;
  width?: string;
  keepRatio?: boolean;
  showViews?: boolean;
  showNav?: boolean;
}

interface SlideType {
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

  componentWillMount() {
    this.addSlideCount(0);
  }

  render() {
    const {
      height = '500px',
      width = '100vw',
      keepRatio = false,
      showNav = true,
      showViews = true
    } = this.props;
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
          <div className={styles.iconWrapper}>
            <Icon icon={arrow} color={'rgba(255,255,255, 0.5)'} />
          </div>
        </div>
        {showViews ? (
          <div className={styles.views}>
            <strong>
              Views:
              {'  '} {this.getCurrentViews()}
            </strong>
          </div>
        ) : null}
        <div className={nextClasses} onClick={this.nextSlide.bind(this)}>
          <div className={styles.iconWrapper}>
            <Icon icon={arrow} color={'rgba(255,255,255, 0.5)'} />
          </div>
        </div>
        <div className={styles.slidesContainer} style={containerStyles}>
          {slides.map((slide: SlideType, i: number) => (
            <Slide
              image={slide.image}
              width={width}
              height={height}
              keepRatio={keepRatio}
              key={`slide_${i}`}
            />
          ))}
        </div>
        {showNav ? (
          <div className={styles.navigation}>
            <Navigation
              slideCount={slides.length}
              currentSlide={currentSlide}
              onClick={this.goToSlide.bind(this)}
            />
          </div>
        ) : null}
      </div>
    );
  }

  private getSlides(images: string[]): SlideType[] {
    const slides = images.map(image => {
      return {
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
    const index = this.state.currentSlide + 1;
    this.setState({
      currentSlide: index
    });
    this.addSlideCount(index);
  }

  private previousSlide() {
    const index = this.state.currentSlide - 1;
    this.setState({
      currentSlide: index
    });
    this.addSlideCount(index);
  }

  private addSlideCount(index: number) {
    const newSlides = this.state.slides;
    newSlides[index].shownCount = newSlides[index].shownCount + 1;
    this.setState({
      slides: newSlides
    });
  }

  private getCurrentViews() {
    const { slides, currentSlide } = this.state;
    return slides[currentSlide].shownCount;
  }

  private goToSlide(index: number) {
    this.setState({
      currentSlide: index
    });
  }
}

export default Slider;
