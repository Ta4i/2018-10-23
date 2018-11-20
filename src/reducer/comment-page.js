import { ADD_COMMENT, LOAD_COMMENT_PAGE, START, SUCCESS } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentPageRecord = Record({
  num: null,
  comments: null,
  loading: false,
  loaded: false
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentPageRecord)
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, response } = action

  switch (type) {
    case LOAD_COMMENT_PAGE + START:
      return state.setIn(
        ['entities', payload.num],
        new CommentPageRecord({
          num: payload.num,
          loading: true,
          loaded: false
        })
      )

    case LOAD_COMMENT_PAGE + SUCCESS:
      return state.setIn(
        ['entities', payload.num],
        new CommentPageRecord({
          num: payload.num,
          comments: response.records,
          loading: false,
          loaded: true
        })
      )

    default:
      return state
  }
}
