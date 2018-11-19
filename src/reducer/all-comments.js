import {
  LOAD_ALL_COMMENTS,
  START,
  SUCCESS,
  FAIL,
  CHANGE_PAGE,
  LOAD_ALL_ARTICLES
} from '../constants'
import { Record } from 'immutable'

const COMMENTS_PER_PAGE = 5

const CommentsRecord = Record({
  entities: [],
  loading: false,
  loaded: false,
  total: 0,
  error: null
})

export default (allCommentsRecord = new CommentsRecord(), action) => {
  switch (action.type) {
    case LOAD_ALL_COMMENTS + START:
      return allCommentsRecord.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return allCommentsRecord
        .set('entities', action.payload.records)
        .set(
          'filteredEntities',
          action.payload.records.slice(0, COMMENTS_PER_PAGE)
        )
        .set('total', action.payload.total)
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_COMMENTS + FAIL:
      return allCommentsRecord.set('error', action.error)
    /*
    case CHANGE_PAGE:
          const filteredComments = allCommentsRecord.get('entities').filter((it, ind) => ((ind <= (action.payload.page * COMMENTS_PER_PAGE) - 1 ) && (ind >= (action.payload.page - 1) * (COMMENTS_PER_PAGE))));
          return allCommentsRecord.set('filteredEntities', filteredComments)
              .set('activePage', action.payload.page);*/

    default:
      return allCommentsRecord
  }
}
