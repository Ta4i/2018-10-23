import { FILTER_BY_DATE } from '../../constants'

export default (state = { from: undefined, to: undefined }, action) => {
  if (action.type == FILTER_BY_DATE) {
    return action.payload
  }

  return state
}
