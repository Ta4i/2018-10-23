import React, { Component } from 'react'
import ArticleComment from './comment'
import decorComment from '../decorators/comment-decor'

class CommentList extends Component {
  render() {
    if (!this.props.items) {
      return null
    }

    const buttonText = this.props.isCommentOpen
      ? 'Hide comments'
      : 'Show comments'

    return (
      <div>
        <button onClick={this.onButtonClick}>{buttonText}</button>
        {this.items}
      </div>
    )
  }

  get items() {
    const { isCommentOpen } = this.props

    if (!isCommentOpen) {
      return null
    }

    return (
      <div>
        <h4>Comments:</h4>
        <ul>{this.item}</ul>
      </div>
    )
  }

  get item() {
    return this.props.items.map((item) => (
      <li key={item.id}>{<ArticleComment item={item} />}</li>
    ))
  }

  onButtonClick = () => {
    this.props.toggleState()
  }
}

export default decorComment(CommentList)
