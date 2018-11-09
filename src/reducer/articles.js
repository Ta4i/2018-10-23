import { DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticle = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticle, action) => {
  if (action.type === DELETE_ARTICLE) {
    console.log('Article Reducer - articleState', articleState)
    return Object.values(articleState).filter(
      (article) => article.id !== action.payload.id
    )
  }
  return articleState
}
