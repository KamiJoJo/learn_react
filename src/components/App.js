import React, { Component } from 'react';
import Navbar from './common/Navbar';
import Home from './home/Home';
import About from './about/About';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* Fixed navbar */}
          <Navbar/>

          {/* Link 설정하는애... */}
          <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Contact" component={About}/>

        </div>
      </Router>

    );
  }
}

export default App;
