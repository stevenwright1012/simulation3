import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Post from './components/Post/Post';
import routes from './routes';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        {/* {
          this.props.location.pathname === '/'
          ?
          null
          :
          <Nav />
        } */}
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
