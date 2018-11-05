import {
  INCREMENT,
  DELETE_ARTICLE,
  SELECT_ARTICLES,
  SELECT_DATE_RANGE
} from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: articleId
  }
}

export function selectArticles(articleIds) {
  return {
    type: SELECT_ARTICLES,
    payload: articleIds
  }
}

export function selectDateRange(range) {
  return {
    type: SELECT_DATE_RANGE,
    payload: range
  }
}
