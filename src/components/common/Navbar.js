import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{

  constructor(props){
    super(props);
    this.state = {
        activePage : 'Home'
    }
  }

  handleActivePage(pagename){
    this.setState({activePage:pagename});
  }

  render(){

    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">
                Toggle navigation
              </span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/" onClick={() => {this.handleActivePage('Home')}}>
              Project name
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className={(this.state.activePage === 'Home')?'active':''}>
                <Link to="/"  onClick={() => {this.handleActivePage('Home')}} >Home</Link>
              </li>
              <li className={(this.state.activePage === 'About')?'active':''}>
                <Link to="/About"  onClick={() => {this.handleActivePage('About')}} >About</Link>
              </li>
              <li className={(this.state.activePage === 'Contact')?'active':''}>
                <Link to="/Contact" onClick={() => {this.handleActivePage('About')}} >Contact</Link>
              </li>
            </ul>
          </div>
          {/*/.nav-collapse */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
