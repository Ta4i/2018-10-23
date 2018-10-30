import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  render() {
    const { isOpen, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem}>
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        {isOpen ? this.getBody() : null}
      </div>
    )
  }

  getBody() {
    const { comments } = this.props
    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )
    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
