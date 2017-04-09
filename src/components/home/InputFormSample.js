import React, { Component } from 'react';

class InputFormSample extends Component{

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      users:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event){
    this.setState({id:event.target.value});
  }

  handleNameChange(event){
    this.setState({name:event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const newUser ={
      id: this.state.id,
      name: this.state.name,
    };

    if(newUser.id === '' || newUser.name === ''){
      //Alert!!!!
      alert('You must insert all!!!!!');
    }else{
      this.setState((prevState) => (
        {users:prevState.users.concat(newUser)}
      ));
    }
  }

  render(){
    return (
      <div>
        <form className="form-horizontal" role="form">
            <div className="form-group">
                <label htmlFor="inputType" className="col-sm-2 control-label">ID</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Input ID" name="id" value={this.state.id} onChange={(event) => this.handleIdChange(event)}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputType" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Input Name" name="name" value={this.state.name} onChange={(event) => this.handleNameChange(event)}/>
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-default" onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </div>
            </div>
        </form>
        <ul className="list-group">
          {
            this.state.users.map((user, index) => {
              const uniqueKey = 'userID_'+index;
              return (
                <li className="list-group-item" key={uniqueKey}>ID : {user.id}  /  Name : {user.name}</li>
              );
            })
          }

        </ul>
      </div>
    );
  }
}

export default InputFormSample;
