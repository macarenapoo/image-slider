# Image Slider

Image slider using React and Typescript.

The slider is fully responsive (please note that if you specify a width and a height these will be fixed), and it keeps track of the number of times each image has been viewed.

### Properties

| Property    | Type                    | Required | Default         | Description                                                                                           |
| ----------- | ----------------------- | -------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| images      | `string[]`              | true     |                 | Array of images for the slider.                                                                       |
| width       | `string`                | false    | `100vw`         | Width of the slider in px, % or vh.                                                                   |
| height      | `string`                | false    | `500px`         | Height of the slider in px, % or vh.                                                                  |
| keepRatio   | `boolean`               | false    | `false`         | When true, the images will preserve aspect ratio and not crop.                                        |
| showViews   | `boolean`               | false    | `true`          | Display the number of times each slide has been viewed.                                               |
| showNav     | `boolean`               | false    | `true`          | Displays navigation for the slider.                                                                   |
| background  | `string`                | false    | `rgb(44,44,44)` | Background color of the slider (for when aspect ratio is on).                                         |
| alignImages | `top | center | bottom` | false    | `center`        | When aspect ratio is off, images will sometimes crop. This propperty indicates where to align images. |

### Demo

<a href="https://maca-image-slider.herkouapp.com" target="_blank">View demo and examples.</a>

### Example and Usage

The slider takes an array of images as the only required property.

```
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Slider from './components/Slider';

const images = [
  require('../images/coffee-777612_640.jpg'),
  require('../images/coins-1523383_1920.jpg'),
  require('../images/posing-999199_1920.jpg'),
  require('../images/raspberries-1426859_1920.jpg')
];


ReactDOM.render(<Slider images={images} />, document.getElementById("app"));
```

### Development

For local developement:

1. Run `yarn` to install all npm packages.
2. Run `yarn dev` to run webpack-dev-server.
3. Go to [http://localhost:9191](http://localhost:9191)
