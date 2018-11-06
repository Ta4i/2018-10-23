import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import articlesFilterReducer from './seleted'
import dateRangeReduser from './date-range'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  articlesFilter: articlesFilterReducer,
  dateRange: dateRangeReduser
})
