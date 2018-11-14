import { START, SUCCESS, FAIL } from '../constants'

export default (store) => (next) => (action) => {
  const { callAPI, ...rest } = action

  if (!callAPI) return next(rest)

  next({ ...rest, type: action.type + START })

  fetch(callAPI)
    .then((res) => res.json())
    .then((responce) => {
      next({
        ...rest,
        responce,
        type: action.type + SUCCESS
      })
    })
    .catch((error) =>
      next({
        ...rest,
        error,
        type: action.type + FAIL
      })
    )
}
