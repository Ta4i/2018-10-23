import { INCREMENT, DELETE_ARTICLE, USERNAME, SELECT } from '../constants'

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

export function selectedArticles(articles) {
  return {
    type: SELECT,
    payload: articles
  }
}
