import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import names from './reducers/names'
import form from './reducers/form'
import login from './reducers/login'
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  names,
  form,
  login
})

const middleWare = [thunkMiddleware]

const initStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middleWare)
    )
  )
}

export default initStore
