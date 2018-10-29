import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  render() {
    const { comments } = this.props

    console.log('CommentList renders, comments', comments)

    return <ul>{this.comments}</ul>
  }

  get comments() {
    if (!this.props.comments) return
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment user={comment.user} text={comment.text} />
      </li>
    ))
  }
}

export default CommentList
