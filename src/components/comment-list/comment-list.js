import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import CommentForm from '../comment-form'
import toggleOpenItem from '../../decorators/toggleOpen'
import { loadComments } from '../../ac'
import Loader from '../common/loader'

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    //from toggleOpenItem decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func
  }

  componentDidMount() {
    !this.props.loaded &&
      this.props.fetchData &&
      this.props.fetchData(this.props.article.id)
  }

  render() {
    if (this.props.loading) return <Loader />

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
    const {
      article: { comments = [], id },
      isOpen
    } = this.props
    if (!isOpen) return null
    return (
      <div className="test--comment-list__body">
        {comments.length ? (
          this.comments
        ) : (
          <h3 className="test--comment-list__empty">No comments yet</h3>
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

const mapStateToProps = (state) => ({
  comments: state.comments.entities
})

const mapDispatchToProps = {
  fetchData: loadComments
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(toggleOpenItem(CommentList))
