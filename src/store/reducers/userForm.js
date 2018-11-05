import { USERNAME } from '../../constants'

export default (username = '', action) => {
  return action.type === USERNAME ? action.payload : username
}
