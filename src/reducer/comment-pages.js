import { SUCCESS, LOAD_COMMENT_PAGE, START } from '../constants'
import { OrderedMap, Record } from 'immutable'

const CommentPageRecord = Record({
  comments: [],
  loaded: false
})

const ReducerRecord = Record({
  total: null,
  loadingPage: null,
  entities: new OrderedMap({}),
  numPages: null
})

const getInitialMap = (numPages) => {
  let result = new OrderedMap()

  for (let i = 0; i < numPages; i++) {
    result = result.set(i, new CommentPageRecord())
  }

  return result
}

const setComments = (state, comments) => {
  return state
    .setIn(['entities', state.loadingPage, 'comments'], comments)
    .setIn(['entities', state.loadingPage, 'loaded'], true)
}

export default (state = new ReducerRecord(), action) => {
  const { type } = action
  switch (type) {
    case LOAD_COMMENT_PAGE + START:
      return state.set('loadingPage', action.payload)

    case LOAD_COMMENT_PAGE + SUCCESS:
      const { total, records } = action.payload
      if (state.total !== total) {
        const numPages = Math.ceil(total / 5)

        state = state
          .set('total', total)
          .set('entities', getInitialMap(numPages))
          .set('numPages', numPages)
      }

      return setComments(state, records)

    default:
      return state
  }
}
