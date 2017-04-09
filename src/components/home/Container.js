import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Thumbnails from './Thumbnails';
import Contents from './Contents';
import InputFormSample from './InputFormSample';

class Container extends Component {
  render() {
    return (
      <div className="container">
        {/* Main component for a primary marketing message or call to action */}
        <Jumbotron />
        {/* Form with list */}
        <InputFormSample />
        <Thumbnails />
        <Contents />
      </div>
    );
  }
}

export default Container;
