import React, { Component } from 'react'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    console.log('CommentList renders, comments', comments)

    return (
      <div>
        <button>{'Hide comments'}</button>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    if (!this.props.comments) return
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </li>
    ))
  }
}

export default CommentList
