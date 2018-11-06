import { DELETE_ARTICLE } from '../../constants'
import articles from '../../fixtures'

export default (articlesState = articles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return articlesState.filter((article) => article.id !== action.payload)
  }
  return articlesState
}
