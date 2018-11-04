import { INCREMENT, DELETE_ARTICLE, FILTER } from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: articleId
  }
}

export function filerSelect(articleId) {
  return {
    type: FILTER,
    payload: articleId
  }
}
