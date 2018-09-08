import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QRCodeReact from 'qrcode.react'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

const Container = styled.div`
  margin: 30px 0;
`

class QRCode extends React.Component {
  static propTypes = {
    pubKey: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <Container>
          <Typography variant="title">
            Logging in with Ethentity
          </Typography>
          <QRCodeReact
            value={ this.props.pubKey }
            size={ 256 }
            style={ { marginTop: '30px' } }
          />
        </Container>
        <Typography variant="title">
          Scan QR code with your Ethentity app
        </Typography>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pubKey: state.auth.pubKey,
})

export default connect(mapStateToProps)(QRCode)
