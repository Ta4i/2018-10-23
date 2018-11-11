import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import * as middleware from '../middleware'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(middleware.loggingMiddleware),
  applyMiddleware(middleware.commentIdGeneratorMiddleware)
)
const store = createStore(reducer, enhancer)

window.store = store

export default store
