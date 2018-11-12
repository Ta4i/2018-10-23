import { normalizedComments } from '../fixtures'
import { getObjFromArray } from '../helper/index'
import { ADD_COMMENT } from '../constants/index'

console.log(getObjFromArray(normalizedComments))
export default (commentState = getObjFromArray(normalizedComments), action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT: {
      const newCommentsObj = Object.assign({}, commentState)
      newCommentsObj[action.payload.id] = {
        id: payload.id,
        user: payload.author,
        text: payload.text
      }
      return newCommentsObj
    }
  }

  return commentState
}
