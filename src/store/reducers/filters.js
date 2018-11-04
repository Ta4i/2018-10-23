import * as consts from '../../constants'

const createInitialState = () => {
  return {
    selectedArticles: null,
    dateRange: {
      from: undefined,
      to: undefined
    }
  }
}

export default (filterState = createInitialState(), action) => {
  if (action.type === consts.SELECTED_ARTICLES_CHANGED) {
    return { ...filterState, selectedArticles: action.payload }
  }
  if (action.type === consts.DATE_FILTER_CHANGED) {
    return { ...filterState, dateRange: action.payload }
  }
  return filterState
}
