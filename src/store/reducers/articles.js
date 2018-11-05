import * as consts from '../../constants'
import articles from '../../fixtures'

export default (articleState = articles, action) => {
  if (action.type === consts.DELETE_ARTICLE) {
    return articleState.filter((article) => article.id !== action.payload)
  }

  return articleState
}
