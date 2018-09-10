import * as React from 'react';
import * as cx from 'classnames';

import * as styles from './Slide.css';

interface Props {
  image: any;
  width: string;
  height: string;
  keepRatio: boolean;
  alignImages: 'top' | 'center' | 'bottom';
}

class Slide extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public componentWillMount() {}

  render() {
    const { image, width, height, keepRatio, alignImages } = this.props;
    const slideStyles = {
      backgroundImage: `url(${image})`,
      height,
      width,
      backgroundPosition: alignImages
    };
    const slideClasses = cx({
      [styles.slide]: true,
      [styles.fullWidth]: !keepRatio,
      [styles.fullHeight]: keepRatio
    });
    return <div className={slideClasses} style={slideStyles} />;
  }

  private getRatio() {
    let img = new Image();
    img.src = this.props.image;
    img.onload = () => {
      const { width, height } = img;
      return 'fullWidth';
    };
  }
}

export default Slide;
