import * as consts from '../../constants'

const createInitialState = () => ({
  from: undefined,
  to: undefined
})

export default (dateFilterState = createInitialState(), action) => {
  if (action.type === consts.DATE_FILTER_CHANGED) {
    return action.payload
  }
  return dateFilterState
}
