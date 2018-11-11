import { OPEN_CLOSE_ITEM } from '../constants'

export default (openItemId = null, action) => {
  if (action.type === OPEN_CLOSE_ITEM) {
    return openItemId === action.payload ? null : action.payload
  }

  return openItemId
}
