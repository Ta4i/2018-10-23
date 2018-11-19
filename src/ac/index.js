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
  LOAD_COMMENTS_PAGE
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

export function loadComments(page) {
  return function(dispatch, getState) {
    const limit = getState().pagedComments.commentsPerPage
    const offset = (page - 1) * limit

    dispatch({
      type: LOAD_COMMENTS_PAGE + START,
      payload: page
    })

    fetch(`/api/comment?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          payload: {
            page,
            response
          },
          type: LOAD_COMMENTS_PAGE + SUCCESS
        })
      })
      .catch((e) =>
        dispatch({
          type: LOAD_COMMENTS_PAGE + FAIL,
          error: e
        })
      )
  }
}
