import React from 'react';

const galleryImage = (props) => {
  const openModal = () => {
    props.openModal(props.img);
  };
  return <img className="gallery-thumbnail" src={props.img.url} alt={props.img.caption} onClick={openModal} />
};

export default galleryImage;