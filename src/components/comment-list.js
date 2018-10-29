import React, { PureComponent } from 'react'
import { Comment } from './comment'
import isOpen from '../decorators/is-open'

export class CommentList extends PureComponent {
  render() {
    const { isOpen, toggleOpen } = this.props
    console.log('comment list render')

    return (
      <>
        <button onClick={toggleOpen}>
          {isOpen ? 'close comments' : 'open comments'}
        </button>
        {this.body}
      </>
    )
  }

  get body() {
    const { comments, isOpen } = this.props

    if (!isOpen) {
      return null
    }

    const commentsMarkup = comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ))

    return <ul>{commentsMarkup}</ul>
  }
}

export default isOpen(CommentList)
