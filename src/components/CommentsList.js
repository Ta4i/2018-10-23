import React, { Component } from 'react'
import comments from '../decorators/comments'
import Comment from './Comment'

class CommentsList extends Component {
  render() {
    const { handleClick, isOpen } = this.props

    const commentBtn = isOpen ? 'Hide comments' : 'Show comments'

    return (
      <section>
        <button className="comment__btn" onClick={handleClick}>
          {commentBtn}
        </button>
        {isOpen ? this.comments : null}
      </section>
    )
  }

  get comments() {
    const { comments } = this.props

    if (comments) {
      return comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))
    } else {
      return <h5>Here are no comments yet</h5>
    }
  }
}

export default comments(CommentsList)
