import { ADD_COMMENT } from '../constants'

export const logger = (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)
  next(action)
  console.log('after', store.getState())
}

export const generateId = (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    let chars = 'abcdefghijklmnopqrstuvwxyz0123456789',
      commentId = ''

    for (let i = 0; i < 10; i++)
      commentId += chars.charAt(Math.floor(Math.random() * chars.length))

    let newAction = Object.assign({}, action, {
      payload: {
        ...action.payload,
        id: commentId
      }
    })

    next(newAction)
  }
}
