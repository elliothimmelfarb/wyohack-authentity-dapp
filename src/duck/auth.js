import shhStartListening from './util/whisper-subscription-asymmetric'

// Types
const INIT_ETHENTICATE = 'INIT_ETHENTICATE'
const INIT_QR = 'INIT_QR'
const AUTHENTICATED = 'AUTHENTICATED'
const AUTH_FAILED = 'AUTH_FAILED'

// actions
const initEthenticate = () => ({
  type: INIT_ETHENTICATE,
})
const generateQRCode = pubKey => ({
  type: INIT_QR,
  payload: pubKey,
})
const authenticated = user => ({
  type: AUTHENTICATED,
  payload: user,
})
const authFailed = () => ({
  type: AUTH_FAILED,
})

// thunks
const clickInitEthenticate = () => async dispatch => {
  dispatch(initEthenticate())
  const pubKey = await shhStartListening(dispatch)
  return dispatch(generateQRCode(pubKey))
}

const messageReceived = payload => dispatch => {
  console.log(payload)
  // validate claim
}

// export actions
export const Actions = {
  clickInitEthenticate,
  messageReceived,
}

const initialState = {
  authenticated: false,
  subscribing: false,
  atQR: false,
  pubKey: '',
  authFailed: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INIT_ETHENTICATE: {
      return {
        ...state,
        subscribing: true,
      }
    }
    case INIT_QR: {
      return {
        ...state,
        atQR: true,
        subscribing: false,
        pubKey: action.payload,
      }
    }
    case AUTHENTICATED: {
      return {
        ...state,
        authenticated: true,
        atQR: false,
        authFailed: false,
      }
    }
    case AUTH_FAILED: {
      return {
        authFailed: true,
      }
    }
    default: return state
  }
}
