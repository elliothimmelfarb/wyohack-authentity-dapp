

const CHOOSE_ETHENTICATE = 'CHOOSE_ETHENTICATE'

const initEthenticate = () => dispatch => {

}

export const Actions = {
  initEthenticate,
}

const initialState = {
  authenticated: false,
  atQR: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CHOOSE_ETHENTICATE: {
      return {
        ...state,

      }
    }
    default: return state
  }
}
