import { createContext } from 'react'

const { Provider, Consumer } = createContext({
  language: 'en-US',
  changeLanguage: () => {}
})

export { Provider, Consumer }
