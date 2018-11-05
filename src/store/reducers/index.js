import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import articlesSelectedReducer from './articles-selected'
import dateRangeReducer from './date-range'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  articlesSelected: articlesSelectedReducer,
  dateRange: dateRangeReducer
})
