import * as consts from '../constants'
import { normalizedArticles } from '../fixtures'

export default (commentListState = null, action) => {
  if (action.type === consts.SHOW_COMMENTS) {
    const { articleId } = action.payload
    const article = normalizedArticles.find(
      (article) => article.id === articleId
    )
    if (article) {
      return article.comments
    }
    return null
  }

  if (action.type === consts.HIDE_COMMENTS) {
    return null
  }

  if (action.type === consts.ADD_COMMENT) {
    const { articleId, id } = action.payload
    const article = normalizedArticles.find(
      (article) => article.id === articleId
    )
    article.comments.push(id)
    return article.comments.slice()
  }

  return commentListState
}
