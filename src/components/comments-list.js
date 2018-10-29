import React, { Component } from 'react'
import toggleOpen from '../decorators/toggle-open'
import Comment from './comment'

class CommentsList extends Component {
  render() {
    const { isOpen } = this.props
    const buttonTitle = isOpen ? 'Hide comments' : 'Show comments'
    return (
      <div>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        {this.body}
      </div>
    )
  }

  handleClick = () => {
    this.props.toggleOpen()
  }

  get body() {
    const { isOpen } = this.props
    if (!isOpen) return null
    return (
      <div>
        <h3>Comments:</h3>
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    const { items } = this.props
    return items.map((item) => (
      <li key={item.id}>
        <Comment item={item} />
      </li>
    ))
  }
}

export default toggleOpen(CommentsList)
