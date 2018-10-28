import React from 'react'

function Comment(props) {
  return (
    <div>
      <p>{props.comment.text}</p>
      <span>{props.comment.user}</span>
    </div>
  )
}

export default Comment
