import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import allCommentsReducer from './all-comments'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  allCommentsRecord: allCommentsReducer
})
