import React, { Component } from 'react'
import Comment from './comment'
import closer from '../../decorators/closer'

class CommentList extends Component {
  render() {
    const { isOpen } = this.props

    const btnTitle = isOpen ? `hide comments` : `show comments`

    return (
      <ul>
        <button onClick={this.doHide}>{btnTitle}</button>
        {this.comments}
      </ul>
    )
  }

  doHide = () => {
    this.props.toggleHide()
  }

  get comments() {
    const { isOpen, comments } = this.props

    if (!isOpen) {
      return null
    }

    if (!comments || !comments.length) {
      return <p>There is no one comment yet</p>
    }

    return comments.map((it) => {
      return (
        <li key={it.id}>
          <Comment comment={it} />
        </li>
      )
    })
  }
}

export default closer(CommentList)
