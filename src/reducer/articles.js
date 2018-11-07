import { DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

export default (articleState = normalizedArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return articleState.filter((article) => article.id !== action.payload.id)
  }
  return articleState
}
