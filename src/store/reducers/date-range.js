import { DATE_RANGE_CHANGED } from '../../constants'

export default (
  dateFilterState = { from: undefined, to: undefined },
  action
) => {
  if (action.type === DATE_RANGE_CHANGED) {
    return action.payload
  }
  return dateFilterState
}
