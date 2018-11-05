import { DELETE_ARTICLE, SELECT_ARTICLES } from '../../constants'
import articles from '../../fixtures'

const initialState = articles.map((article) => article.id)

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return state.filter((articleId) => articleId.id !== action.payload)
    case SELECT_ARTICLES:
      return action.payload
    default:
      return state
  }
}
