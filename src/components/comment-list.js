import React, { Component } from 'react'
import Comment from './comment'

export default class CommentList extends Component {
  buttonTitle = 'open'

  render() {
    return (
      <div>
        Comments: {this.expander}
        <ul>{this.items}</ul>
      </div>
    )
  }

  get expander() {
    const { comments, isOpen } = this.props
    this.buttonTitle = isOpen ? 'close' : 'open'
    return comments ? (
      <button onClick={this.handleClick}>{this.buttonTitle}</button>
    ) : (
      'None'
    )
  }

  handleClick = () => {
    const { toggleOpen, openItemId, isOpen } = this.props
    console.log('handleClick: openItemId - ' + openItemId)
    toggleOpen(openItemId)
  }

  get items() {
    const { comments, isOpen } = this.props
    if (isOpen && comments) {
      return comments.map((item) => (
        <li key={item.id}>
          <Comment comment={item} />
        </li>
      ))
    }
    return null
  }
}
