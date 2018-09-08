import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AuthButton from './AuthButton'

const AuthButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

class AuthButtonArea extends Component {
  render() {
    return (
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
    )
  }
}

export default AuthButtonArea
