import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import TopBar from './Components/TopBar';
import AuthButtonArea from './Components/AuthButtonArea';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <AuthButtonArea />
      </div>
    );
  }
}

export default connect()(App);
