import { INCREMENT } from '../../constants'

export default (state = 0, action) => {
  return action.type === INCREMENT ? state + 1 : state
}
