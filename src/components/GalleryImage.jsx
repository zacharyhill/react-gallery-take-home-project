import React from 'react';

const galleryImage = (props) => (
    <img className="gallery-thumbnail" src={props.src} alt={props.caption} />
);

export default galleryImage;