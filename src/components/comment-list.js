import React, { Component } from 'react'
import Comment from './comment'

export default class CommentList extends Component {
  render() {
    return (
      <div>
        Comments: {this.emptyText}
        <ul>{this.items}</ul>
      </div>
    )
  }

  get emptyText() {
    return this.props.comments ? null : 'None'
  }

  get items() {
    if (this.props.comments) {
      return this.props.comments.map((item) => (
        <li key={item.id}>
          <Comment comment={item} />
        </li>
      ))
    }
    return null
  }
}
