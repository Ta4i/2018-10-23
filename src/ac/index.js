import * as consts from '../constants'

export function incrementActionCreator() {
  return { type: consts.INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: consts.DELETE_ARTICLE,
    payload: articleId
  }
}

export function selectedArticlesChanged(selectedArticles) {
  return {
    type: consts.SELECTED_ARTICLES_CHANGED,
    payload: selectedArticles
  }
}

export function dateRangeChanged(newDateRage) {
  return {
    type: consts.DATE_FILTER_CHANGED,
    payload: newDateRage
  }
}
