import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants/index'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...commentState,
        [action.payload.id]: {
          id: action.payload.id,
          user: action.payload.user,
          text: action.payload.text
        }
      }
    default:
      return commentState
  }
}
