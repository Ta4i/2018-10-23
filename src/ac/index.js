import { INCREMENT, DELETE_ARTICLE, USERNAME } from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: articleId
  }
}

export function getUsername(name) {
  return {
    type: USERNAME,
    payload: name
  }
}
