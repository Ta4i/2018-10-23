import { ADD_COMMENT, LOAD_COMMENTS, FAIL, SUCCESS, START } from '../constants'
import { arrToMap } from './utils'
import { fromJS } from 'immutable'

const initialState = fromJS({
  entities: {},
  loading: false,
  loaded: false,
  error: null
})

export default (state = initialState, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, { ...payload, id: randomId })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + FAIL:
      return state.set('error', action.payload.error).set('loading', false)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(payload))
        .set('loaded', true)
        .set('loading', false)

    default:
      return state
  }
}
