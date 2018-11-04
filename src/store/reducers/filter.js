import { FILTER } from '../../constants'
import articles from '../../fixtures'

export default (filterState = articles, action) => {
  if (action.type === FILTER) {
    return filterState
  }
  return filterState
}
