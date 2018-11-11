import { DELETE_ARTICLE, ADD_COMMENT } from '../constants/index'
import { keyedArticles } from '../fixtures'

export default (articleState = keyedArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      const newArticle = Object.assign({}, articleState)
      delete newArticle[action.payload.id]
      return newArticle

    case ADD_COMMENT:
      const article = articleState[action.payload.currentId]
      return {
        ...articleState,
        [action.payload.currentId]: {
          ...article,
          comments: (article.comments || []).concat(action.uniqueId)
        }
      }

    default:
      return articleState
  }
}
