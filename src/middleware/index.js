import { ADD_COMMENT } from '../constants/index'
import { IDGenerator } from '../helper'

export default (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)

  if (action.type === ADD_COMMENT) {
    action.payload.id = IDGenerator()
  }

  next(action)
  console.log('after', store.getState())
}
