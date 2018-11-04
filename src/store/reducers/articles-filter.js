import * as consts from '../../constants'
import articles from '../../fixtures'

const createInitialState = () => {
  return articles.map((item) => ({
    value: item.id,
    label: item.title
  }))
}

export default (articlesFilterState = createInitialState(), action) => {
  if (action.type === consts.SELECTED_ARTICLES_CHANGED) {
    return action.payload
  }
  if (action.type === consts.DELETE_ARTICLE) {
    const selectedArticles = articlesFilterState.filter(
      (a) => a.value !== action.payload
    )
    return selectedArticles
  }
  return articlesFilterState
}
