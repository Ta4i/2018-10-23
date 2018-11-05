import { combineReducers } from 'redux'
import counterReducer from './counter'
import selectedArticleIdsReducer from './selectedArticleIds'
import selectedDateRangeReducer from './slectedDateRange'
import articlesReducer from './articles'

export default combineReducers({
  count: counterReducer,
  selectedArticleIds: selectedArticleIdsReducer,
  selectedDateRange: selectedDateRangeReducer,
  articles: articlesReducer
})
