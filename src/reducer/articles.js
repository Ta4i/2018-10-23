import { DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return Object.values(articleState).filter(
      (article) => article.id !== action.payload.id
    )
  }
  return articleState
}
