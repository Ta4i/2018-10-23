import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (comments = new ReducerRecord(), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return comments.set(randomId, { ...payload, id: randomId })

    case LOAD_COMMENTS + START:
      return comments.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return comments
        .set('entities', arrToMap(action.payload, CommentRecord))
        .set('loading', false)
        .set('loaded', true)

    default:
      return comments
  }
}
