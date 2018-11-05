import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import usernameReducer from './userForm'
import selectedArticles from './select'
import filteredArticles from './filter'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  username: usernameReducer,
  selectedArticles: selectedArticles,
  filteredArticles: filteredArticles
})
