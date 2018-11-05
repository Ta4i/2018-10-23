import { SELECT } from '../../constants'

export default (selectedArticles = [], action) => {
  switch (action.type) {
    case SELECT:
      return action.payload
    default:
      return selectedArticles
  }
}
