import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpenItem from '../../decorators/toggleOpen'
import Loader from '../common/loader'
import { loadComments } from '../../ac'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  fetchDataIfNeeded() {
    const { isOpen, fetchData, article } = this.props
    isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded &&
      fetchData(article.id)
  }

  componentDidMount() {
    this.fetchDataIfNeeded()
  }

  componentDidUpdate() {
    this.fetchDataIfNeeded()
  }

  render() {
    const { isOpen, toggleOpenItem } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comment-list__btn">
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
  getBody() {
    const { article, isOpen } = this.props
    if (article.commentsLoadingError)
      return <strong>{article.commentsLoadingError.message}</strong>
    if (article.commentsLoading) return <Loader />
    if (!isOpen || !article.commentsLoaded) return null

    return (
      <div className="test--comment-list__body">
        {article.comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
        )}
        <CommentForm articleId={article.id} />
      </div>
    )
  }
  get comments() {
    return (
      <ul>
        {this.props.article.comments.map((commentId) => (
          <li key={commentId} className="test--comment-list__item">
            <Comment id={commentId} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapDispatchToProps = {
  fetchData: loadComments
}

export default connect(
  null,
  mapDispatchToProps
)(toggleOpenItem(CommentList))
