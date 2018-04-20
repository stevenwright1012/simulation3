import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Post from './components/Post/Post';
import routes from './routes';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom';

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {
    console.log(this.props.location);
    
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

// const ShowTheLocationWithRouter = withRouter(ShowTheLocation)

export default App;
