import {
  INCREMENT,
  DELETE_ARTICLE,
  USERNAME,
  SELECT,
  FILTERED
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

export function filteredArticles(articleId) {
  return {
    type: FILTERED,
    payload: articleId
  }
}
