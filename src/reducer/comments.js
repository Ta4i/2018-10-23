import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  if (action.type === ADD_COMMENT) {
    const id = action.payload.id
    let comment = {}
    comment[id] = {
      id: id,
      user: action.payload.user,
      text: action.payload.text
    }
    return { ...commentState, ...comment }
  }
  return commentState
}
