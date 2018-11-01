import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
  }

  render() {
    const { toggleOpenItem, isOpen } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem}>
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <ReactCSSTransitionGroup
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={400}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { comments, isOpen } = this.props

    if (!isOpen) return null

    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )

    return <div>{body}</div>
  }
}

export default toggleOpen(CommentList)
