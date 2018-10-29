import React, { Component } from 'react'
import Comment from './comment'
import commentListDecorator from '../decorators/comment-list-decorator'

class CommentList extends Component {
  render() {
    const buttonText = this.props.showComments
      ? 'hide comments'
      : 'show comments'

    return (
      <div>
        <button onClick={this.props.toggleShowComments}>{buttonText}</button>
        {this.props.showComments && <ul>{this.comments}</ul>}
      </div>
    )
  }

  get comments() {
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <Comment user={comment.user} text={comment.text} />
      </li>
    ))
  }
}
export default commentListDecorator(CommentList)
