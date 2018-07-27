import React, { Component } from 'react';

import Gallery from './Gallery';
import { data as pictures } from '../dummy-data/pictures';

export default class App extends Component {
  render() {
    return <Gallery pictures={pictures} />
  }
}