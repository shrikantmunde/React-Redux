import App from './App'
import { connect } from 'react-redux'
import * as actions from './actions/names'

const mapStateToProps = (state) => {
  return {
    names: state.names
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddName: (name) => {
      const action = actions.addName(name)
      console.log(action)
      dispatch(action)
    },
    onRemoveName: (index) => {
      dispatch(actions.removeName(index))
    },
    onCopy: () => {
      dispatch(actions.copyNames())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
