import React, {Component} from 'react';
import Videos from './Videos';

class Container extends Component{
  render(){
    return(
      <div className="container">
        <h2>About Page</h2>
        <Videos/>
      </div>
    )
  }
}

export default Container;
