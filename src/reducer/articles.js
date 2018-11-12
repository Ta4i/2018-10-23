import { DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return Object.values(articleState).reduce((acc, article) => {
      if (article.id !== action.payload.id) acc[article.id] = article

      return acc
    }, {})
  }

  return articleState
}
