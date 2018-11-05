import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import usernameReducer from './userForm'
import selectedArticles from './select'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  username: usernameReducer,
  selectedArticles: selectedArticles
})
