import React from 'react';

const galleryImage = (props) => {
  const openModal = () => {
    props.openModal(props.img);
  };
  return (
    <img
      alt={props.img.caption}
      className="gallery-thumbnail"
      onClick={openModal} 
      src={props.img.url}
    />
  );
};

export default galleryImage;
