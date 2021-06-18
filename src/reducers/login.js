import * as types from '../actions'

const initialState = {
  isLoggingIn: false,
  response: {},
  error: ''
}

function login(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return {
        ...state,
        isLoggingIn: true
      }
      
    case types.LOGIN_OK:
      return {
        ...state,
        isLoggingIn: false,
        response: action.response
      }
    case types.LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        error: action.error
      }
    default:
      return state
  }
}

export default login
