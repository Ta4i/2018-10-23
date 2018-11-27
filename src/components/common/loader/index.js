import React, { useState, useEffect } from 'react'
import i18n from '../../i18n'

function Loader({ t }) {
  const countFromHook = useCounter()

  return <h3>{t('Loading') + countFromHook}</h3>
}

const useCounter = () => {
  let int = null
  const [count, setCount] = useState(0)

  useEffect(() => {
    //componentDidMount + componentDidUpdate
    int =
      int ||
      setInterval(() => {
        setCount(count + 1)
      }, 1000 / 60)

    return () => {
      //componentWillUnmount
      clearInterval(int)
      int = null
    }
  })

  return count
}

export default i18n(Loader)
