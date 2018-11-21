import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filtersReducer from './filters'
import commentsReducer from './comments'
import { connectRouter } from 'connected-react-router'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  count: counterReducer,
  articles: articlesReducer,
  filters: filtersReducer,
  comments: commentsReducer
})
