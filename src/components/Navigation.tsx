import * as React from 'react';
import cx from 'classnames';

import * as styles from './Navigation.css';
import { array } from 'prop-types';

interface Props {
  slideCount: number;
  currentSlide: number;
  onClick(index: number): void;
}

class Navigation extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { slideCount } = this.props;
    const arr = Array.from(new Array(slideCount), (val, i) => i);
    return (
      <div className={styles.container}>
        {arr.map((slide, index) => this.getDot(index))}
      </div>
    );
  }

  private getDot(index: number) {
    const { currentSlide, onClick } = this.props;
    const dotClasses = cx({
      [styles.dot]: true,
      [styles.active]: index === currentSlide
    });
    return (
      <div
        className={dotClasses}
        onClick={() => onClick(index)}
        key={`dot_${index}`}
      />
    );
  }
}

export default Navigation;
