import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  if (action.type === ADD_COMMENT) {
    const comments = { ...commentState }
    comments[action.payload.id] = action.payload
    return comments
  }

  return commentState
}
