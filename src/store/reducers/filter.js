import { FILTER } from '../../constants'
import articles from '../../fixtures'

export default (filterState = articles, action) => {
  if (action.type === FILTER) {
    console.log('Reducer FILTER is here')
    console.log('filterState', filterState)
    return filterState.filter((article) => (article.id = action.payload.id))
    // return filterState
  }
  return filterState
}
