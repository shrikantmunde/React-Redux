import { ADD_NAME, REMOVE_NAME, COPY_NAMES } from '../actions'

// export const addName = (name) => {
//   return {
//     type: ADD_NAME,
//     name
//   }
// }

// This is an action creatore
// It returns a simple object that describes the change you
// want to make to the state.
// All the actions must implement the "type" property
// Use a unique ID for the type
// Most people use a string constant
export function addName(name) {
  return {
    type: ADD_NAME,
    name : name
  }
}

export function removeName(index) {
  return {
    type: REMOVE_NAME,
    index 
  }
}

export function copyNames() {
  return {
    type: COPY_NAMES
  }
}
