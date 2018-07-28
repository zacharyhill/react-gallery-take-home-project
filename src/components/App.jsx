import React, { Component } from 'react';

import Gallery from './Gallery';
import { data as pictures } from '../dummy-data/pictures';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
      imgs: pictures,
      modalImg: {},
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.startImgTransition = this.startImgTransition.bind(this);
  }
  closeModal() {
    this.setState({
      showModal: false,
      modalImg: null,
    });
  }
  goToNextImg(currentImg) {
    const nextIndex = currentImg.index + 1;
    const { imgs } = this.state;
    // go back to first picture at the end
    const nextImg = imgs[nextIndex] !== undefined ? imgs[nextIndex] : imgs[0];
    this.setState({
      modalImg: nextImg,
      animate: false,
    });
  }
  startImgTransition(currentImg) {
    // allow time for short animation before rerender
    setTimeout(() => {
      this.goToNextImg(currentImg)
    }, 100);
    this.setState({
      animate: true,
    });
  }
  openModal(img) {
    this.setState({
      modalImg: img,
      showModal: true,
    });
  };
  render() {
    return (
      <Gallery
        animate={this.state.animate}
        closeModal={this.closeModal}
        modalImg={this.state.modalImg}
        goToNextImg={this.startImgTransition}
        openModal={this.openModal}
        pictures={this.state.imgs}
        showModal={this.state.showModal}
      />
    );
  }
}
