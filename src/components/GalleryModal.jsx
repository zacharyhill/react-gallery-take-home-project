import React, { Component } from 'react';

import './styles/Modal.scss';

export default class GalleryModal extends Component {
  constructor(props) {
    super(props);
    this.goToNextImg = this.goToNextImg.bind(this);
    this.checkIfSwipedLeft = this.checkIfSwipedLeft.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }
  goToNextImg(event) {
    event.stopPropagation();
    this.props.goToNextImg(this.img);
  }
  checkIfSwipedLeft() {
    return this.firstTouchPos > this.lastTouchPos ? true : false;
  }
  onTouchStart(event) {
    this.firstTouchPos = event.touches[0].screenX;
  }
  onTouchMove(event) {
    this.lastTouchPos = event.touches[0].screenX;
  }
  onTouchEnd(event) {
    if (this.checkIfSwipedLeft()) {
      this.props.goToNextImg(this.img);
    }
  }
  render() {
    this.img = this.props.img;
    if (!this.props.showModal) {
      return null;
    }
    const animateClass = this.props.animate ? ' hide' : '';
    return (
      <div className='modal-overlay' onClick={this.props.closeModal}>
        <div className={`modal-body${animateClass}`}>
          <div className="caption">{this.props.img.caption}</div>
          <img
            src={this.props.img.url}
            onClick={this.goToNextImg}
            onTouchEnd={this.onTouchEnd}
            onTouchMove={this.onTouchMove}
            onTouchStart={this.onTouchStart}
          />
        </div>
      </div>
    );
  }
};
