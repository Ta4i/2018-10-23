import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import filterReducer from './filters'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  filter: filterReducer
})
