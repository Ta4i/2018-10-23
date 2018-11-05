import {
  INCREMENT,
  DELETE_ARTICLE,
  SET_FILTER,
  RESET_FILTER
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

export function setFilter(payload) {
  return {
    type: SET_FILTER,
    payload: payload
  }
}

export function resetFilter() {
  return {
    type: RESET_FILTER
  }
}
