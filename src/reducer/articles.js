import { DELETE_ARTICLE, ADD_COMMENT } from '../constants/index'
import { normalizedArticles } from '../fixtures'

const defaultArticle = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

// вместо массива статей будем храниить их идшки
const articleIds = normalizedArticles.map((article) => article.id)

export default (articleState = articleIds, action) => {
  //console.log('reducer::article::',articleState)

  if (action.type === DELETE_ARTICLE) {
    return articleState.filter((id) => id !== action.payload.id)
  }
  return articleState
}

// добавим в стор объект с артиклами
export const articlesObjectReducer = (state = defaultArticle, action) => {
  const retState = state

  if (action.type === ADD_COMMENT) {
    // добавим ИД коммента в массив комментов артикла
    const comments = retState[action.payload.articleId].comments

    if (comments) {
      comments[comments.length] = action.payload.comment.id
    } else {
      retState[action.payload.articleId].comments = [action.payload.comment.id] //.map(() => action.payload.comment.id)
    }
  }

  return retState
}
