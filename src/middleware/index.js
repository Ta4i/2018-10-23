import * as consts from '../constants'

var getUniqueId = function() {
  var d = new Date().getTime()
  d += parseInt(Math.random() * 100).toString()
  return d
}

export default (store) => (next) => (action) => {
  console.log('begin', store.getState())
  console.log('dispatch action', action)

  if (action.type === consts.ADD_COMMENT) {
    action.payload.id = getUniqueId()
  }

  next(action)
  console.log('after', store.getState())
}
