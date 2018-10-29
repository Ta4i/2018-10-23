import React, { Component } from 'react'

class Comment extends Component {
  render() {
    const { comment } = this.props

    return (
      <div className="comment">
        <span className="comment__author">
          <b>{comment.user}</b> says:
        </span>
        <p className="comment__text">{comment.text}</p>
      </div>
    )
  }
}

export default Comment
