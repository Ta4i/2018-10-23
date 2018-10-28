import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    return <div>{this.body}</div>
  }

  get body() {
    const { comment } = this.props

    return (
      <section style={{ margin: '20px 0' }}>
        <div>
          <i>{comment.text}</i>
        </div>
        <div style={{ marginTop: '5px' }}>
          <b>{comment.user}</b>
        </div>
      </section>
    )
  }
}
