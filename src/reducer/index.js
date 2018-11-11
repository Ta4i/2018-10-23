import { combineReducers } from 'redux'
import counterReducer from './counter'
import accordionReducer from './accordion'
import articlesReducer from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import submittingCommentReducer from './submit-comment'

export default combineReducers({
  count: counterReducer,
  openItemId: accordionReducer,
  articles: articlesReducer,
  filters: filtersReducer,
  comments: commentsReducer,
  submittingComment: submittingCommentReducer
})
