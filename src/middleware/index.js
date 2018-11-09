import { ADD_COMMENT } from '../constants'

export const logger = (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)
  next(action)
  console.log('after', store.getState())
}
export const commentId = (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action.payload.id = new Date().getTime()
    console.log('Middleware', action.payload.id)
  }
  next(action)
}
