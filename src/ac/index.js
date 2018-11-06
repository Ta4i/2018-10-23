import {
  INCREMENT,
  DELETE_ARTICLE,
  SELECT_FILTER_CHANGED,
  DATE_RANGE_CHANGED
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
export function selectedChanged(selectedArticles) {
  return {
    type: SELECT_FILTER_CHANGED,
    payload: selectedArticles
  }
}

export function dateRangeChanged(dateRage) {
  return {
    type: DATE_RANGE_CHANGED,
    payload: dateRage
  }
}
