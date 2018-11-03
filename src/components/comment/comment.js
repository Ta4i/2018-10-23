import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
  const { user, text } = props.comment
  return (
    <div>
      <h4>{user}</h4>
      <p>{text}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

export default Comment
