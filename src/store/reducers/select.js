import { DELETE_ARTICLE, FILTER_ARTICLE } from '../../constants'

export default (articleForFilter = [], action) => {
  switch (action.type) {
    case FILTER_ARTICLE:
      return action.payload.slice()

    case DELETE_ARTICLE:
      return articleForFilter.filter((it) => it.value !== action.payload)

    default:
      return articleForFilter
  }
}
