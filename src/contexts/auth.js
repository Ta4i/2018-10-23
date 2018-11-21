import { createContext } from 'react'

const { Provider, Consumer } = createContext({
  userNameFromContext: ''
})

export { Provider, Consumer }
