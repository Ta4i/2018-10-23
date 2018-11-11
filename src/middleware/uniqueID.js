const uuidv4 = require('uuid/v4')

export default (store) => (next) => (action) => {
  if (!action.isNew) return next(action)
  next({ ...action, uniqueId: uuidv4() })
}
