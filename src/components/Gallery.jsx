import React from 'react';

import Pictures from './Pictures';
import './styles/Gallery.scss';

const gallery = (props) => (
  <div className="gallery-container">
    <Pictures
      pictures={props.pictures}
    />
  </div>
);

export default gallery;