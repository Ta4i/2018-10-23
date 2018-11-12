import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComment = normalizedComments.reduce((acc, comment) => {
  acc[comment.id] = comment
  return acc
}, {})

export default (commentState = defaultComment, action) => {
  // нельзя менять объект - возвращаем новый
  const retArray = commentState

  if (action.type === ADD_COMMENT) {
    retArray[action.payload.comment.id] = action.payload.comment
  }

  return retArray
}
