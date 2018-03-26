import * as types from '../constants/ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_ALL:
      return {
        data: action.data
      }
    default:
      return state
  }
}
