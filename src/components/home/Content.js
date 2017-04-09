import React, { Component } from 'react';
import Ryon from './ryon.jpeg';
import Ryon2 from './ryon2.jpg';

class Content extends Component{
  constructor() {
    super();
    this.state = {
      img: null,
    };
  }
  componentWillMount() {
    this.setState({
      img: Ryon,
    });
  }
  changeImg(image) {
    this.setState({
      img: image,
    });
  }
  render() {
    return (
      <div className="col-sm-6 col-md-3">
        <div className="thumbnail">
          <img src={this.state.img} alt={this.state.img} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.content}</p>
            <p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => { this.changeImg(Ryon); }}
              >
                Say Hello!
              </button>
              <button
                type="button"
                className="btn btn-default"
                onClick={() => { this.changeImg(Ryon2); }}
              >
                Say Goodbye!
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
