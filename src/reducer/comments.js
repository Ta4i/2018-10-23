import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants/index'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  if (action.type === ADD_COMMENT) {
    let comment = action.payload,
      commentId = comment.id

    return Object.assign({}, commentState, {
      ...commentState,
      [commentId]: {
        id: comment.id,
        user: comment.user,
        text: comment.text
      }
    })
  }
  return commentState
}
