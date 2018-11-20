import { LOAD_PAGED_COMMENTS, SUCCESS, START } from '../constants'
import { Record, OrderedMap } from 'immutable'

const PageWithCommentsRecord = Record({
  number: null,
  comments: null,
  isLoaded: null
})

const ReducerRecord = Record({
  pages: new OrderedMap({}),
  loading: false,
  loaded: false,
  totalCount: 0
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload } = action
  switch (type) {
    case LOAD_PAGED_COMMENTS + START:
      const pageNum = parseInt(payload.page)
      const pageRecord = state.pages.get(pageNum)
      let newState = state.set('loading', true)
      if (!pageRecord) {
        const record = new PageWithCommentsRecord({
          number: pageNum,
          comments: [],
          isLoaded: false
        })
        newState = newState
          .set('loading', true)
          .setIn(['pages', pageNum], record)
      }
      return newState
    case LOAD_PAGED_COMMENTS + SUCCESS:
      const pageNumber = parseInt(payload.page)
      const record = new PageWithCommentsRecord({
        number: pageNumber,
        comments: payload.records,
        isLoaded: true
      })
      return state
        .set('loading', false)
        .set('totalCount', payload.total)
        .set('loaded', true)
        .setIn(['pages', pageNumber], record)
    default:
      return state
  }
}
