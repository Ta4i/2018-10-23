import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h3>User: {comment.user}</h3>
        <section>{comment.text}</section>
      </div>
    )
  }
}
