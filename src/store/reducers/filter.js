import { FILTERED } from '../../constants'

export default (filteredArticles = [], action) => {
  switch (action.type) {
    case FILTERED:
      return [
        ...filteredArticles,
        {
          articleId: action.payload
        }
      ]
    default:
      return filteredArticles
  }
}
