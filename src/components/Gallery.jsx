import React from 'react';

import GalleryModal from './GalleryModal';
import Pictures from './Pictures';
import './styles/Gallery.scss';

const gallery = (props) => (
  <div className="gallery-container">
    <Pictures
      closeModal={props.closeModal}
      openModal={props.openModal}
      pictures={props.pictures}
    />
    <GalleryModal
      animate={props.animate}
      closeModal={props.closeModal}
      goToNextImg={props.goToNextImg}
      showModal={props.showModal}
      img={props.modalImg}
    />
  </div>
);

export default gallery;
