import React, { Component } from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class CommentList extends Component {
  render() {
    if (this.items) {
      return (
        <div>
          <p>
            <strong>Comments</strong>
          </p>
          <ul>{this.items}</ul>
        </div>
      )
    }
    return null
  }

  get items() {
    if (this.props.items) {
      return this.props.items.map((item) => (
        <li key={'li_' + item.id}>
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
