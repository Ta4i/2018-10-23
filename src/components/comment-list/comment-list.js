import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpenItem from '../../decorators/toggleOpen'
import { connect } from 'react-redux'
import Loader from '../common/loader'
import { loadArticleComments } from '../../ac'
import { Consumer as AuthConsumer } from '../../contexts/auth'
import i18n from '../i18n'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,

    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  componentDidUpdate(oldProps) {
    const { isOpen, article, loadArticleComments } = this.props
    if (
      isOpen &&
      !oldProps.isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id)
    }
  }

  render() {
    const { isOpen, toggleOpenItem, t } = this.props
    const text = t(isOpen ? 'hide comments' : 'show comments')
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
    const {
      article: { comments = [], id, commentsLoading, commentsLoaded },
      isOpen,
      t
    } = this.props

    if (!isOpen) return null
    if (commentsLoading) return <Loader />
    if (!commentsLoaded) return null

    return (
      <div className="test--comment-list__body">
        <AuthConsumer>
          {(value) => <h2>{value.userNameFromContext}</h2>}
        </AuthConsumer>
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">{t('No comments yet')}</h3>
        )}
        <CommentForm articleId={id} />
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

export default connect(
  null,
  { loadArticleComments }
)(i18n(toggleOpenItem(CommentList)))
