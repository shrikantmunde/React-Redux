import { SET_USERNAME, SET_PASSWORD } from '../actions'

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  }
}
