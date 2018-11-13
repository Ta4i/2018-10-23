import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from './utils'
import { Map, fromJS, Record } from 'immutable'

const ArticleRecord = Record({
  id: null,
  text: null,
  title: null,
  date: null,
  comments: []
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

    default:
      return articles
  }
}
