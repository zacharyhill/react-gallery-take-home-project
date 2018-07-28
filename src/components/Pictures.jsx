import React from 'react';

import GalleryImage from './GalleryImage';

const pictures = (props) => (
  <div>
    {props.pictures.map((pic, index) => (
      <div key={index}>
        <div className='gallery-card'>
          <GalleryImage src={pic.url} caption={pic.caption} />
        </div>
      </div>
    ))}
  </div>
);

export default pictures;