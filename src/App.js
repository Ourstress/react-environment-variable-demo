import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</div>
        <div>The backend API URL is <b>{process.env.REACT_APP_API_SERVER_URL}</b></div>
      </div>
    );
  }
}

export default App;
