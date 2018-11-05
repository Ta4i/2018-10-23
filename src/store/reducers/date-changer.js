import { FILTER_DATE } from '../../constants'

export default (currentRange = { from: null, to: null }, action) => {
  switch (action.type) {
    case FILTER_DATE:
      // const newRange = Object.assign({}, action.payload);
      return Object.assign({}, action.payload)
    /*
        case (DELETE_ARTICLE):
            return articleForFilter.filter((it) => it.value !== action.payload);*/

    default:
      return currentRange
  }
}
