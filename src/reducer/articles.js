import { ADD_COMMENT, DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticle = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticle, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return Object.values(articleState).filter(
        (article) => article.id !== action.payload.id
      )
    // case ADD_COMMENT:
    //   return
    default:
      return articleState
  }
}
