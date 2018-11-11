import {
  SET_COMMENT_NAME,
  SET_COMMENT_TEXT,
  CLEAR_SUBMITTING_COMMENT
} from '../constants'

const initialState = {
  user: '',
  text: ''
}

export default (submittingComment = initialState, action) => {
  if (action.type === SET_COMMENT_NAME) {
    return { ...submittingComment, user: action.payload }
  }

  if (action.type === SET_COMMENT_TEXT) {
    return { ...submittingComment, text: action.payload }
  }

  if (action.type === CLEAR_SUBMITTING_COMMENT) {
    return initialState
  }

  return submittingComment
}
