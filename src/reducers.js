import { CREATE_GARBAGE, CLEAR_GARBAGE } from './actions.js'

export default (state=[], action) => {
  switch (action.type) {
    case CREATE_GARBAGE:
      return [...state,action.garbage]
    case CLEAR_GARBAGE:
      return []
    default:
      return state
  }
}
