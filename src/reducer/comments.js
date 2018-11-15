import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Map } from 'immutable'

export default (state = new Map(), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, { ...payload, id: randomId })

    case LOAD_COMMENTS + SUCCESS:
      return state.merge(arrToMap(payload.entities))

    default:
      return state
  }
}
