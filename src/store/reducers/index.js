import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filterReducer from './select'
import dateReducer from './date-changer'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  articleForFilter: filterReducer,
  currentRange: dateReducer
})
