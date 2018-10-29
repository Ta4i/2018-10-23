import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { comment, isOpen } = this.props
    const buttonTitle = isOpen ? 'close comment' : 'open comment'

    return (
      <div>
        <h5>{comment.user}</h5>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        {this.body}
      </div>
    )
  }

  handleClick = () => {
    const { isOpen } = this.props
    if (!isOpen) {
      this.props.toggleOpen(this.props.comment.id)
      return
    }
    this.props.toggleOpen(null)
  }

  get body() {
    const { comment, isOpen } = this.props

    if (!isOpen) return <section />

    return <section>{comment.text}</section>
  }
}
