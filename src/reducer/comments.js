import { ADD_COMMENT } from '../constants/index'
import { keyedComments } from '../fixtures'

export default (comments = keyedComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...comments,
        [action.uniqueId]: {
          ...action.payload.comment,
          id: action.uniqueId
        }
      }

    default:
      return comments
  }
}
