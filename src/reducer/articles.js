import { ADD_COMMENT, DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return Object.values(articleState).reduce((acc, article) => {
        if (article.id !== action.payload.id) acc[article.id] = article

        return acc
      }, {})
    case ADD_COMMENT:
      console.log(articleState)
      console.log(action)

      return Object.values(articleState).reduce((acc, article) => {
        if (article.id === action.payload.articleId) {
          acc[article.id] = article
          console.log(acc[article.id].comments)
          acc[article.id].comments.push(action.payload.id)

          console.log(acc[article.id].comments)
        }

        return acc
      }, {})
    default:
      return articleState
  }
}
