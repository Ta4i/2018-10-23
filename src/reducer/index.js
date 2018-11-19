import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import commentPagesReducer from './comment-pages'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  commentPages: commentPagesReducer
})
