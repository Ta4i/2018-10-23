import { addComment, addCommentToArticle, clearSubmittingComment } from '../ac'
import { SUBMIT_COMMENT } from '../constants'

export function loggingMiddleware(store) {
  return (next) => (action) => {
    console.log('begin', store.getState())
    console.log('dispatch action', action)
    next(action)
    console.log('after', store.getState())
  }
}

let lastCommentId = 0

export function commentIdGeneratorMiddleware(store) {
  return (next) => (action) => {
    next(action)

    if (action.type === SUBMIT_COMMENT) {
      lastCommentId++

      const id = lastCommentId.toString()
      const submittingComment = store.getState().submittingComment
      const comment = { ...submittingComment, id }

      const targetArticleId = store.getState().openItemId

      console.log('adding to article: ' + targetArticleId)

      store.dispatch(addComment(comment))
      store.dispatch(addCommentToArticle(id, targetArticleId))
      store.dispatch(clearSubmittingComment())
    }
  }
}
