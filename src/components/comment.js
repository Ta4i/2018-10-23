import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { comment } = this.props
    return (
      <div>
        <h5>{comment.user}</h5>
        <section>{comment.text}</section>
      </div>
    )
  }
}
