import { LOAD_COMMENTS_PAGE, SUCCESS, FAIL, START } from '../constants'
import { Map, Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  loading: false,
  commentsPerPage: 5,
  totalCommentCount: 0,
  pages: new Map()
})

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case LOAD_COMMENTS_PAGE + START:
      return state.set('loading', true)

    case LOAD_COMMENTS_PAGE + SUCCESS:
      return state
        .set('loading', false)
        .set('totalCommentCount', action.payload.response.total)
        .setIn(
          ['pages', action.payload.page],
          action.payload.response.records.map(
            (comment) => new CommentRecord(comment)
          )
        )

    case LOAD_COMMENTS_PAGE + FAIL:
      return state.set('loading', false)

    default:
      return state
  }
}
