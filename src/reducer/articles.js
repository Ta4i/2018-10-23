import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_COMMENTS,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { arrToMap } from './utils'
import { Record, fromJS } from 'immutable'

const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  loading: false,
  comments: [],
  commentsLoading: false,
  commentsLoaded: false,
  commentsLoadingError: null
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (articles = new ReducerRecord(), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return articles.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return articles.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articles
        .set('entities', arrToMap(action.responce, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_ARTICLES + FAIL:
      return articles.set('error', action.error)

    case LOAD_ARTICLE + START:
      return articles.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articles.setIn(
        ['entities', payload.id],
        new ArticleRecord(action.payload).set('loading', false)
      )

    case LOAD_COMMENTS + START:
      return articles.setIn(
        ['entities', action.payload.id, 'commentsLoading'],
        true
      )

    case LOAD_COMMENTS + FAIL:
      return articles
        .setIn(['entities', action.payload.id, 'commentsLoading'], false)
        .setIn(
          ['entities', action.payload.id, 'commentsLoadingError'],
          action.payload.error
        )

    case LOAD_COMMENTS + SUCCESS:
      return articles
        .setIn(['entities', action.payload.id, 'commentsLoading'], false)
        .setIn(['entities', action.payload.id, 'commentsLoaded'], true)

    default:
      return articles
  }
}
