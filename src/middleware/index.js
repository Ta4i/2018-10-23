import { ADD_COMMENT } from '../constants'

export const commentId = (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    const id = Math.random()
      .toString(36)
      .substr(2, 16)
    action.payload.id = id
    console.log('commentId - ' + action.payload.id)
  }
  next(action)
}

export const logger = (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)
  next(action)
  console.log('after', store.getState())
}
