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
