import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filterReducer from './filter'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filter: filterReducer
})
