import { DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return articleState.filter((article) => article.id !== action.payload.id)
  }

  if (action.type === ADD_COMMENT_TO_ARTICLE) {
    let result = { ...articleState }
    let article = result[action.payload.articleId]
    let articleCopy = { ...article }

    articleCopy.comments.push(action.payload.commentId)
    result[articleCopy.id] = articleCopy

    return result
  }

  return articleState
}
