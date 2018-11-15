import { ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record, Map } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord)
})

export default (state = new ReducerRecord(), action) => {
  const { payload } = action

  switch (action.type) {
    case LOAD_ALL_COMMENTS + SUCCESS:
      console.log('response2', action.response)
      return state.setIn(['entities'], arrToMap(action.response, CommentRecord))

    case ADD_COMMENT:
      return state.setIn(
        ['entities', action.randomId],
        new CommentRecord({ ...payload.comment, id: action.randomId })
      )

    default:
      return state
  }
}
