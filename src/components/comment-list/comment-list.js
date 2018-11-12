import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpenItem from '../../decorators/toggleOpen'
import CommentForm from '../comment-form'
import { connect } from 'react-redux'
import * as consts from '../../constants'

class CommentList extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    comments: PropTypes.array,
    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  render() {
    const { isOpen, toggleOpenItem } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={this.handleClick} className="test--comment-list__btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  handleClick = () => {
    const { isOpen } = this.props
    this.props.toggleOpenItem()
    if (!isOpen) {
      this.props.dispatch({
        type: consts.SHOW_COMMENTS,
        payload: { articleId: this.props.articleId }
      })
    } else {
      this.props.dispatch({ type: consts.HIDE_COMMENTS })
    }
  }

  getBody() {
    const { comments = [], isOpen } = this.props
    if (!isOpen || !comments) return null
    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        <CommentForm articleId={this.props.articleId} />
      </div>
    )
  }
  get comments() {
    return (
      <div>
        <ul>
          {this.props.comments.map((commentId) => (
            <li key={commentId} className="test--comment-list__item">
              <Comment id={commentId} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  comments: store.commentList
})

export default connect(mapStateToProps)(toggleOpenItem(CommentList))
