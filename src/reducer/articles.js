import { ADD_COMMENT, DELETE_ARTICLE } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticle = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articleState = defaultArticle, action) => {
  if (action.type === DELETE_ARTICLE) {
    return Object.values(articleState).filter(
      (article) => article.id !== action.payload.id
    )
  } else if (action.type === ADD_COMMENT) {
    console.log('Article Reducer, articleState', articleState)
    console.log('Article Reducer, action', action)

    for (let key in articleState) {
      if (key === action.payload.articleId) {
        console.log('Target comment found', articleState[key].comments)
        console.log('Comment ID to be added: ', action.payload.comment.id)
        articleState[key].comments.splice(2, action.payload.comment.id)
      }
    }

    console.log('Article Reducer, articleState AFTER', articleState)
  }
  return articleState
}
