import { DELETE_ARTICLE, ADD_COMMENT } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticles, action) => {
  if (action.type === DELETE_ARTICLE) {
    return Object.keys(articleState)
      .filter((key) => key !== action.payload.id)
      .reduce((obj, key) => {
        obj[key] = articleState[key]
        return obj
      }, {})
  }
  if (action.type === ADD_COMMENT) {
    const oldArticle = articleState[action.payload.articleId]
    const newArticle = {
      ...oldArticle,
      ...{ comments: oldArticle.comments.concat(action.payload.id) }
    }
    var obj1 = {}
    obj1[newArticle.id] = newArticle
    return { ...articleState, ...obj1 }
  }
  return articleState
}
