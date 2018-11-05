import { SELECT_DATE_RANGE } from '../../constants'

const initialState = { from: null, to: null }

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DATE_RANGE:
      return action.payload
    default:
      return state
  }
}
