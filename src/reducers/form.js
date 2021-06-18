import * as types from '../actions'

const initialState = {
  username: '',
  password: ''
}

function form(state = initialState, action) {
  switch (action.type) {
    case types.SET_USERNAME:
      return {
        ...state,
        username: action.username
      }
    case types.SET_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    default:
      return state
  }
}

export default form

