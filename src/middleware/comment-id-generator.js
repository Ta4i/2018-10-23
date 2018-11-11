import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action = {
      ...action,
      payload: {
        ...action.payload,
        id: uniqueId()
      }
    }
  }

  next(action)
}

const uniqueId = () =>
  Math.random()
    .toString(36)
    .substr(2)
