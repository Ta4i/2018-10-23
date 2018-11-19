import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  FAIL,
  LOAD_ALL_COMMENTS,
  CHANGE_PAGE
} from '../constants'

export function incrementActionCreator() {
  return { type: INCREMENT }
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

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function loadArticle(id) {
  return function(dispatch) {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    fetch(`/api/article/${id}`)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          payload: response,
          type: LOAD_ARTICLE + SUCCESS
        })
      })
      .catch((e) =>
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error: e
        })
      )
  }
}

export function loadAllComments() {
  return function(dispatch) {
    dispatch({
      type: LOAD_ALL_COMMENTS + START
    })

    fetch(`/api/comment`)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          payload: response,
          type: LOAD_ALL_COMMENTS + SUCCESS
        })
      })
      .catch((e) =>
        dispatch({
          type: LOAD_ALL_COMMENTS + FAIL,
          error: e
        })
      )
  }
}
