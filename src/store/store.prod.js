import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../rootReducer'

const middlewares = [ReduxThunk]
const enhancers = [applyMiddleware(...middlewares)]

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, compose(...enhancers))
}
