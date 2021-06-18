import { ADD_NAME, REMOVE_NAME, COPY_NAMES } from '../actions'

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case ADD_NAME:
//       return [ ...state, action.name ]
//     default:
//       return state
//   }
// }

function names(state = ["Shrikant"], action) {
  let copy

  switch (action.type) {
    case ADD_NAME:
      // Array spread operator
      // Copies an array (...state)
      // Appends new item
      return [ ...state, action.name ]
    case REMOVE_NAME:
      copy = [...state]
      copy.splice(action.index, 1)
      return copy
    case COPY_NAMES:
      return [...state, ...state]
    default:
      return state
  }
}

export default names
