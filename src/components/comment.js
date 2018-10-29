import React, { Component } from 'react'

export class Comment extends Component {
  render() {
    let { comment } = this.props
    if (!comment.text) {
      return null
    }

    return (
      <li>
        <h4>{comment.user || 'anonymous'}</h4>
        {comment.text}
      </li>
    )
  }
}
