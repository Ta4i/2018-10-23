import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants/index'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  if (action.type === ADD_COMMENT) {
    return commentState
  }
  return commentState
}
