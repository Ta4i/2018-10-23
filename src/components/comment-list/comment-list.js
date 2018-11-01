import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ),
    isOpen: PropTypes.bool.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
  }
  // static defaultProps = {
  //     comments: []
  // }
  render() {
    const { isOpen, toggleOpenItem } = this.props
    return (
      <div>
        <button onClick={toggleOpenItem} data-comments-button>
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {isOpen ? this.getBody() : null}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { comments } = this.props
    const body = comments.length ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment data-comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      <h3>No comments yet</h3>
    )
    return <div>{body}</div>
  }
}

export { CommentList }
export default toggleOpen(CommentList)
