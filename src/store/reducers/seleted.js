import { DELETE_ARTICLE, SELECT_FILTER_CHANGED } from '../../constants'

export default (articlesSelectedState = 0, action) => {
  switch (action.type) {
    case SELECT_FILTER_CHANGED:
      return action.payload
    case DELETE_ARTICLE:
      return articlesSelectedState.filter(
        (articleId) => articleId !== action.payload.articleId
      )
    default:
      return articlesSelectedState
  }
}
