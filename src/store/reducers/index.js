import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import selectArticlesReducer from './filter-by-select'
import dateFilterReducer from './filter-by-date'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filteredArticlesBySelect: selectArticlesReducer,
  filteredArticlesByDate: dateFilterReducer
})
