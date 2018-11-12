import { DELETE_ARTICLE } from '../constants/index'
import { ADD_COMMENT } from '../constants/index'
import { normalizedArticles } from '../fixtures'
import { getObjFromArray } from '../helper/index'

export default (articleState = getObjFromArray(normalizedArticles), action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_ARTICLE:
      return articleState.filter((article) => article.id !== action.payload.id)
    case ADD_COMMENT: {
      const newArticleState = Object.assign({}, articleState)
      newArticleState[action.articleId].comments.push(payload.id)
      return newArticleState
    }
  }

  return articleState
}
