import React, {Component} from 'react';
import RyonImg from './ryon.jpeg';

class Thumbnail extends Component{
  render(){
    return (
        <div className="col-xs-6 col-md-3">
          <a href="#" className="thumbnail">
            <img src={RyonImg} alt={RyonImg}/>
          </a>
        </div>
    );
  }
}

export default Thumbnail;
