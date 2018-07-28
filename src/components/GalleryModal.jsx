import React from 'react';

const galleryModal = (props) => {
  if (props.showModal === false) {
    return null;
  }
  const animateClass = props.animate ? 'hide' : '';
  return(
    <div className='modal-overlay' onClick={props.closeModal}>
      <div className='modal-body'>
        <div className="caption">{props.img.caption}</div>
        <img className={animateClass} src={props.img.url} />
      </div>
    </div>
  );
}

export default galleryModal;