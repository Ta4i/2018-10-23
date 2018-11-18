import { LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default (allComments = [], action) => {
  switch (action.type) {
    case LOAD_ALL_COMMENTS + SUCCESS:
      return action.payload.records

    default:
      return allComments
  }
}
