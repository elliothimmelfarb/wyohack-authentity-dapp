import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthButton from './AuthButton'
import { Actions } from '../duck/auth'

const AuthButtonsArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`

class AuthButtonArea extends Component {
  static propTypes = {
    clickInitEthenticate: PropTypes.func.isRequired,
    subscribing: PropTypes.bool.isRequired,
  }

  handleEthenticate = () => {
    this.props.clickInitEthenticate()
  }

  render() {
    const { subscribing } = this.props

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
          subscribing={ subscribing || false }
          handleClick={ this.handleEthenticate }
        />
      </AuthButtonsArea>
    )
  }
}

const mapStateToProps = state => ({
  subscribing: state.auth.subscribing,
})

const mapDispatchToProps = dispatch => ({
  clickInitEthenticate: () => dispatch(Actions.clickInitEthenticate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtonArea);
