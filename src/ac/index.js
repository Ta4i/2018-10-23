import * as Actions from '../constants'

export function incrementActionCreator() {
  return { type: Actions.INCREMENT }
}

export function deleteArticle(articleId) {
  return {
    type: Actions.DELETE_ARTICLE,
    payload: { id: articleId }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: Actions.CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: Actions.CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment, currentId) {
  return {
    type: Actions.ADD_COMMENT,
    payload: { comment, currentId },
    isNew: true
  }
}
