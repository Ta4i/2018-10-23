import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL,
  LOAD_ALL_COMMENTS
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  comments: [],
  textLoading: false,
  textLoaded: false,
  commentsLoading: false,
  commentsLoaded: false
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
        .set('entities', arrToMap(action.response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_ARTICLES + FAIL:
      return articles.set('error', action.error)

    case LOAD_ARTICLE + START:
      return articles.setIn(['entities', payload.id, 'textLoading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articles
        .setIn(['entities', payload.id], new ArticleRecord(action.payload))
        .setIn(['entities', payload.id, 'textLoading'], false)
        .setIn(['entities', payload.id, 'textLoaded'], true)

    case LOAD_ALL_COMMENTS + START:
      return articles.setIn(
        ['entities', payload.parentId, 'commentsLoading'],
        true
      )

    case LOAD_ALL_COMMENTS + SUCCESS:
      return articles
        .setIn(['entities', payload.parentId, 'commentsLoading'], false)
        .setIn(['entities', payload.parentId, 'commentsLoaded'], true)

    case LOAD_ALL_COMMENTS + FAIL:
      return articles.set('error', action.error)

    default:
      return articles
  }
}
