import { FILTER_BY_SELECT } from '../../constants'

export default (state = [], action) => {
  if (action.type === FILTER_BY_SELECT) {
    return action.payload
  }

  return state
}
