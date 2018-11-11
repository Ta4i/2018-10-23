import {
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE
} from '../constants'

const defaultFilter = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilter, action) => {
  switch (action.type) {
    case CHANGE_DATE_RANGE:
      return { ...filters, dateRange: action.payload.dateRange }
    case CHANGE_SELECTION:
      return { ...filters, selected: action.payload.selected }
    case DELETE_ARTICLE:
      return {
        ...filters,
        selected: filters.selected.filter(
          (selected) => selected.value !== action.payload.id
        )
      }
    default:
      return filters
  }
}
