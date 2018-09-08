import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css';
import TopBar from './Components/TopBar';
import AuthButtonArea from './Components/AuthButtonArea';


class App extends Component {
  static propTypes = {
    authenticated: PropTypes.boolean.isRequired,
    atQR: PropTypes.boolean.isRequired,
  }

  render() {
    const { authenticated, atQR } = this.props
    return (
      <div className="App">
        <TopBar />
        {
          !authenticated &&
          <AuthButtonArea />
        }
        {
          !authenticated && atQR &&
          'QR'
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  atQR: state.auth.authenticated,
})

export default connect(mapStateToProps)(App);
