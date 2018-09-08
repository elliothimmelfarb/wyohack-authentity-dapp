import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css';
import TopBar from './Components/TopBar';
import AuthButtonArea from './Components/AuthButtonArea';
import QRCode from './Components/QRCode'


class App extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    atQR: PropTypes.bool.isRequired,
  }

  render() {
    const { authenticated, atQR } = this.props
    return (
      <div className="App">
        <TopBar />
        {
          !authenticated && !atQR &&
          <AuthButtonArea />
        }
        {
          !authenticated && atQR &&
          <QRCode />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  atQR: state.auth.atQR,
})

export default connect(mapStateToProps)(App);
