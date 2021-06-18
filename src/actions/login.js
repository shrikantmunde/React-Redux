import { REQUEST_LOGIN, LOGIN_OK, LOGIN_ERROR } from '../actions'

// function requestLogin() {
//   return {
//     type: REQUEST_LOGIN
//   }
// }

const requestLogin = () => ({ type: REQUEST_LOGIN })

function loginOk(response) {
  return {
    type: LOGIN_OK,
    response
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function login(username, password) {
  return function(dispatch) {
    if (!username || !password) return

    dispatch(requestLogin())

    window.fetch('https://api.ipify.org?format=json')
      .then(response => {
        if (!response.ok) throw new Error(response.status)
        return response.json()
      })
      .then(response => dispatch(loginOk(response)))
      .catch(ex => dispatch(loginError(ex.message)))
  }
}
