import { SET_FILTER, RESET_FILTER } from '../../constants'

export default (state, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...action.payload
      }
    case RESET_FILTER:
    default:
      return {}
  }
}
