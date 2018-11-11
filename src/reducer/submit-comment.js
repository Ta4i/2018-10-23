import {
  SET_COMMENT_NAME,
  SET_COMMENT_TEXT,
  CLEAR_SUBMITTING_COMMENT
} from '../constants'

const initialState = {
  user: '',
  text: '',
  enabled: false
}

const checkIfSubmitEnabled = (state) => state.user !== '' && state.text !== ''

export default (submittingComment = initialState, action) => {
  if (action.type === SET_COMMENT_NAME) {
    let result = { ...submittingComment, user: action.payload }
    result.enabled = checkIfSubmitEnabled(result)
    return result
  }

  if (action.type === SET_COMMENT_TEXT) {
    let result = { ...submittingComment, text: action.payload }
    result.enabled = checkIfSubmitEnabled(result)
    return result
  }

  if (action.type === CLEAR_SUBMITTING_COMMENT) {
    return initialState
  }

  return submittingComment
}
