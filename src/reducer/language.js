import { SET_LANGUAGE } from '../constants'

export default (language = 'en', action) => {
  if (action.type === SET_LANGUAGE) {
    return action.payload
  }

  return language
}
