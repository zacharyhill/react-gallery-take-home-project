import React from 'react';

import GalleryImage from './GalleryImage';

const pictures = (props) => (
  <div>
    {props.pictures.map((pic, index) => {
      pic.index = index;
      return (
        <div key={index}>
          <div className='gallery-card'>
            <GalleryImage img={pic} openModal={props.openModal} />
          </div>
        </div>
      );
    })}
  </div>
);

export default pictures;