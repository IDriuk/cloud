import * as types from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case types.RECEIVE_ALL:
      return [
        ...action.data.coordinates
      ]
    default:
      return state
  }
}
