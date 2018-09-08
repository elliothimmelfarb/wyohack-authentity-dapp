import shhStartListening from './util/whisper-subscription-asymmetric'

// Types
const INIT_ETHENTICATE = 'INIT_ETHENTICATE'
const INIT_QR = 'INIT_QR'

// actions
const initEthenticate = () => ({
  type: INIT_ETHENTICATE,
})

const generateQRCode = pubKey => ({
  type: INIT_QR,
  payload: pubKey,
})

// thunks
const clickInitEthenticate = () => async dispatch => {
  dispatch(initEthenticate())
  const pubKey = await shhStartListening(dispatch)
  return dispatch(generateQRCode(pubKey))
}

export const Actions = {
  clickInitEthenticate,
}

const initialState = {
  authenticated: false,
  subscribing: false,
  atQR: false,
  pubKey: '',
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
    default: return state
  }
}
