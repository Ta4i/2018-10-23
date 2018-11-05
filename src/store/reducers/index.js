import { combineReducers } from 'redux'
import counterReducer from './counter'
import articlesReducer from './articles'
import usernameReducer from './userForm'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer,
  username: usernameReducer
})
