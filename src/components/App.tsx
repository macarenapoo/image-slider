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
      <Slider images={images} />
    </div>
  );
};

export default App;
