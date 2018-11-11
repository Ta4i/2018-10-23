import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  OPEN_CLOSE_ITEM,
  SUBMIT_COMMENT,
  SET_COMMENT_NAME,
  SET_COMMENT_TEXT,
  ADD_COMMENT,
  ADD_COMMENT_TO_ARTICLE,
  CLEAR_SUBMITTING_COMMENT
} from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
}

export function openCloseItem(itemId) {
  return {
    type: OPEN_CLOSE_ITEM,
    payload: itemId
  }
}

export function deleteArticle(articleId) {
  return {
    type: DELETE_ARTICLE,
    payload: { id: articleId }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function setCommentUser(user) {
  return {
    type: SET_COMMENT_NAME,
    payload: user
  }
}

export function setCommentText(text) {
  return {
    type: SET_COMMENT_TEXT,
    payload: text
  }
}

export function submitComment() {
  return {
    type: SUBMIT_COMMENT
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export function addCommentToArticle(commentId, articleId) {
  return {
    type: ADD_COMMENT_TO_ARTICLE,
    payload: { commentId, articleId }
  }
}

export function clearSubmittingComment() {
  return {
    type: CLEAR_SUBMITTING_COMMENT
  }
}
