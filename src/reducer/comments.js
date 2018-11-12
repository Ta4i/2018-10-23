import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  console.log('Reducer: commentState', commentState)
  if (action.type === ADD_COMMENT) {
    const commentEntry = {}
    commentEntry[action.payload.comment.id] = action.payload.comment
    return { ...commentState, ...commentEntry }
  }
  return commentState
}
