import { ADD_COMMENT, DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticle = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticle, action) => {
  if (action.type === DELETE_ARTICLE) {
    return Object.values(articleState).filter(
      (article) => article.id !== action.payload.id
    )
  } else if (action.type === ADD_COMMENT) {
    for (let key in articleState) {
      if (key === action.payload.articleId) {
        articleState[key].comments.push(action.payload.comment.id)
      }
    }
  }
  return articleState
}
