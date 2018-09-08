import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../rootReducer'

export default function configureStore(initialState = {}) {
  const middlewares = [
    ReduxThunk,
  ]
  const enhancers = [
    applyMiddleware(...middlewares),
    // other store enhancers if any
  ]
  const composeEnhancers = composeWithDevTools({
    // other compose enhancers if any
    // Specify here other options if needed
  })
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('../rootReducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
