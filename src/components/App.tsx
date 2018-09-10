import * as React from 'react';

import * as styles from './App.css';
import Slider from './Slider';
const images = [
  require('../images/coffee-777612_640.jpg'),
  require('../images/coins-1523383_1920.jpg'),
  require('../images/posing-999199_1920.jpg'),
  require('../images/raspberries-1426859_1920.jpg')
];

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.centerText}>
          <h1 className={styles.title}>Image Slider Examples</h1>
          <p className={styles.p}>Built with React and Typescript</p>
          <p className={styles.p}>
            <a
              href="https://github.com/macarenapoo/image-slider"
              target="_blank"
            >
              View Github Repo
            </a>
          </p>
        </div>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Default:</h3>
        </div>
        <Slider images={images} />
        <div className={styles.text}>
          <div className={styles.code}>{`<Slider images={images} />`}</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Aspect Ratio:</h3>
        </div>
        <Slider images={images} showViews={false} keepRatio={true} />
        <div className={styles.text}>
          <div className={styles.code}>
            {`<Slider images={images} showViews={false} keepRatio={true} />`}
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Custom Size:</h3>
        </div>
        <div className={styles.alignCenter}>
          <Slider
            width={'400px'}
            height={'400px'}
            images={images}
            showNav={false}
            alignImages={'top'}
          />
        </div>
        <div className={styles.text}>
          <div className={styles.code}>
            {`<Slider
  width={'400px'}
  height={'400px'}
  images={images}
  showNav={false}
  alignImages={'top'}
/>`}
          </div>
        </div>
        <div className={styles.centerText}>
          <a href="http://macarenapoo.com" target="_blank">
            macarenapoo.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
