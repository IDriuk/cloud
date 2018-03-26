import { getAllData } from '../api'
import * as types from '../constants/ActionTypes'

const receive = data => ({
  type: types.RECEIVE_ALL,
  data
})

export const getAll = () => dispatch => {
  getAllData(data => {
    dispatch(receive(data))
  })
}
