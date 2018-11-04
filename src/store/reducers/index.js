import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import articelsFilterReducer from './articles-filter'
import dateFilterReducer from './date-filter'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  dateFilter: dateFilterReducer,
  articlesFilter: articelsFilterReducer
})
