import { DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

export default (articleState = normalizedArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    console.log('Article Reducer - articleState', articleState)
    return articleState.filter((article) => article.id !== action.payload.id)
  }
  return articleState
}
