import React, { Component } from 'react';

class Videos extends Component{
  constructor(){
    super();
    this.state = {
      id:'',
      videos:[]
    }
  }

  handleAddVideo(event){
    this.setState({id:event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const newVideo ={
      id: this.state.id
    };

    console.log('Check ID');


    const checkId = this.state.videos.filter((video) => {
      return (video.id === newVideo.id);
    }).length;

    if(newVideo.id === ''){
      //Alert!!!!
      alert('You must insert url');
    }else if(checkId > 0){
      alert('Already inserted');
    }else{
      this.setState((prevState) => (
        {videos:prevState.videos.concat(newVideo)}
      ));
    }
  }

  render(){
    return (
      <div>
        <form className="form-horizontal" role="form">
            <div className="form-group">
                <label htmlFor="inputType" className="col-sm-2 control-label">Youtube Video ID</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Input ID" name="url" value={this.state.id} onChange={(event) => this.handleAddVideo(event)}/>
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-default" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </div>
            </div>
        </form>
        <div className="row">
          {
            this.state.videos.map((video) => {
              return (
                <div className="col-sm-4" key={video.id}>
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src={ `https://www.youtube.com/embed/${video.id}?ecver=2`}></iframe>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Videos;
