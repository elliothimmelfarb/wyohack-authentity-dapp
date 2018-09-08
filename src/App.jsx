import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import './App.css';
import TopBar from './Components/TopBar';
import AuthButton from './Components/AuthButton'

const AuthButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <AuthButtonsArea>
          <Typography variant="title" color="inherit">
            Log in to Exchange
          </Typography>
          <AuthButton
            label="Google"
          />
          <AuthButton
            label="LinkedIn"
          />
          <AuthButton
            label="Ethentity"
          />
        </AuthButtonsArea>
      </div>
    );
  }
}

export default App;
