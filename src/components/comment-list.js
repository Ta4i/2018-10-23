import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  render() {
    return (
      <div>
        <ul>{this.items}</ul>
      </div>
    )
  }

  get items() {
    if (this.props.comments) {
      return this.props.comments.map((item) => (
        <li key={item.id}>
          <Comment
            comment={item}
            isOpen={this.props.openItemId === item.id}
            toggleOpen={this.props.toggleOpenItem}
          />
        </li>
      ))
    }
    return null
  }
}

export default accordion(CommentList)
