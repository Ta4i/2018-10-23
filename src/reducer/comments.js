import { normalizedComments } from '../fixtures'
import * as consts from '../constants'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  if (action.type === consts.ADD_COMMENT) {
    console.log('add comment reducer')
    console.log(action.payload)
    commentState[action.payload.id] = action.payload
  }
  return commentState
}
