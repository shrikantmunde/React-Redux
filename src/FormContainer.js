import Form from './Form'
import { connect } from 'react-redux'
import { setUsername, setPassword } from './actions/form'
import { login } from './actions/login'
import * as actions from './actions/names'

function mapStateToProps(state) {
  return {
    username: state.form.username,
    password: state.form.password,
    isLoggingIn: state.login.isLoggingIn,
    response: state.login.response,
    error: state.login.error,
    names: state.names
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeName: (event) => {
      const username = event.target.value
      dispatch(setUsername(username))
    },
    onChangePassword: (event) => {
      dispatch(setPassword(event.target.value))
    },
    onLogin: (username, password) => {
      dispatch(login(username, password))
    },
    onAddName: (name) => {
      const action = actions.addName(name)
      console.log(action)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
