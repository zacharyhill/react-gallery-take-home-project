import React from 'react';

const galleryModal = (props) => {
  if (props.showModal === false) {
    return null;
  }
  const animateClass = props.animate ? ' hide' : '';
  const goToNextImage = (event) => {
    props.goToNextImg(props.img, event);
  };
  return(
    <div className='modal-overlay' onClick={props.closeModal}>
      <div className={`modal-body${animateClass}`}>
        <div className="caption">{props.img.caption}</div>
        <img src={props.img.url} onClick={goToNextImage} />
      </div>
    </div>
  );
}

export default galleryModal;