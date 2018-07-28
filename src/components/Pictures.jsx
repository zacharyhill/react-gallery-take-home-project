import React from 'react';

import GalleryImage from './GalleryImage';

const pictures = (props) => (
  <div>
    {props.pictures.map((pic, index) => (
      <div key={index}>
        <div className='gallery-card'>
          <GalleryImage img={pic} openModal={props.openModal} imgIndex={index} />
        </div>
      </div>
    ))}
  </div>
);

export default pictures;