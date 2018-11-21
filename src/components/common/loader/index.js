import React from 'react'
import InterContext from '../../../contexts/inter'

function Loader(props) {
  return (
    <InterContext.Consumer>
      {({ loading }) => <h3>{loading}</h3>}
    </InterContext.Consumer>
  )
}

export default Loader
