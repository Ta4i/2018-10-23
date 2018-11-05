import {
  DELETE_ARTICLE,
  FILTER_ARTICLE,
  FILTER_DATE,
  INCREMENT
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

export function filterArticle(selectedOptions) {
  return {
    type: FILTER_ARTICLE,
    payload: selectedOptions
  }
}

export function filterDate(range) {
  return {
    type: FILTER_DATE,
    payload: range
  }
}
