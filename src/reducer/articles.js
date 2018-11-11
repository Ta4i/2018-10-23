import { DELETE_ARTICLE, ADD_COMMENT } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const articleMap = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = articleMap, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      const copy = { ...articleState }
      delete copy[action.payload.id]
      return copy
    case ADD_COMMENT: {
      const article = articleState[action.payload.articleId]

      return {
        ...articleState,
        [article.id]: {
          ...article,
          comments: [...article.comments, action.payload.id]
        }
      }
    }
    default:
      return articleState
  }
}
