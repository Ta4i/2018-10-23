import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const { comment, isOpen } = this.props
    const buttonTitle = isOpen ? 'Close' : 'Show'

    return (
      <div key={comment.id}>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        <strong> {comment.user} comment:</strong>
        {this.body}
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleOpen(this.props.comment.id)
  }

  get body() {
    const { comment, isOpen } = this.props

    if (!isOpen) return null

    return <p>{comment.text}</p>
  }
}