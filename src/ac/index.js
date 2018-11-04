import { INCREMENT, DELETE_ARTICLE, FILTER_BY_SELECT } from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: articleId
  }
}

export function filterArticlesBySelect(articleIds) {
  return {
    type: FILTER_BY_SELECT,
    payload: articleIds
  }
}
