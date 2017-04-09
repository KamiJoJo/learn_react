import React, {Component} from 'react';
import Thumbnail from './Thumbnail';

class Thumbnails extends Component{
  render(){

    return (
      <div className="row">
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
        <Thumbnail/>
      </div>
    );
  }
}

export default Thumbnails;
