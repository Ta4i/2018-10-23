import React, { Component } from 'react'
import Comment from './comment'

import openItem from '../decorators/openItem'

class CommentsList extends Component {
  render() {
    const { isOpen, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem}>
          {isOpen ? 'Close comments' : 'Open comments'}
        </button>
        {this.getCommentsBody()}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))
  }

  getCommentsBody = () => {
    const { comments, isOpen } = this.props
    if (isOpen) {
      if (comments) {
        return <ul>{this.comments}</ul>
      } else return <p>There is no comments yet</p>
    } else return null
  }
}

export default openItem(CommentsList)
