import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './AppContainer'
import FormContainer from './FormContainer'
import initStore from './store'
import { Provider } from 'react-redux'

// function MyComponent(props) {
//   return <input />
// }

// const MyComponent = props => <input />

const sum = (a, b) => a + b

console.log(sum(1, 2))

// Create the redux store
const store = initStore({})
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <FormContainer />
    {/* <AppContainer /> */}
  </Provider>,
  document.getElementById('root')
)
