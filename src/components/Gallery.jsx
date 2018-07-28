import React from 'react';

import GalleryImage from './GalleryImage';
import './styles/Gallery.scss';

const gallery = (props) => (
  <div className="gallery-container">
    <div>
      {props.pictures.map((pic, index) => (
        <div key={index}>
          <div className='gallery-card'>
            <GalleryImage src={pic.url} caption={pic.caption} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default gallery;