import React, { Component } from 'react';

import Gallery from './Gallery';
import { data as pictures } from '../dummy-data/pictures';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImg: {},
      showModal: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState({
      showModal: false,
      animate: false,
      modalImg: null,
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
        closeModal={this.closeModal}
        modalImg={this.state.modalImg}
        openModal={this.openModal}
        pictures={pictures}
        showModal={this.state.showModal}
      />
    );
  }
}