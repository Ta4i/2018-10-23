import React, { Component } from 'react'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import { connect } from 'react-redux'
import Loader from '../common/loader'
import { loadCommentPage } from '../../ac'
import {
  commentPageCommentsSelector,
  commentPageLoadingSelector,
  commentPageLoadedSelector
} from '../../selectors'

class CommentPage extends Component {
  componentDidMount() {
    !this.props.loaded &&
      this.props.loadCommentPage &&
      this.props.loadCommentPage(this.props.num)
  }

  componentDidUpdate(oldProps) {
    const { num } = this.props
    if (num !== oldProps.num) {
      loadCommentPage(num)
    }
  }

  render() {
    return (
      <div>
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

  getBody() {
    const { comments = [], loading, loaded } = this.props

    if (loading) return <Loader />
    if (!loaded) return null

    return (
      <div>{comments.length ? this.comments : <h3>No comments yet</h3>}</div>
    )
  }
  get comments() {
    return (
      <ul>
        {this.props.comments.map((comment) => (
          <li key={comment.id} className="test--comment-list__item">
            <Comment id={comment.id} comment={comment} />
          </li>
        ))}
      </ul>
    )
  }
}

export default connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      comments: commentPageCommentsSelector(state, ownProps),
      loading: commentPageLoadingSelector(state, ownProps),
      loaded: commentPageLoadedSelector(state, ownProps)
    }
  },

  { loadCommentPage }
)(CommentPage)
