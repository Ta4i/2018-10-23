import React, { Component } from 'react'
import PropTypes from 'prop-types'
import toggleOpenItem from '../../decorators/toggleOpen'
import { connect } from 'react-redux'
import Loader from '../common/loader'
import { loadComments } from '../../ac'
import { NavLink } from 'react-router-dom'
import {
  commentsPageSelector,
  commentsPageLoadedSelector,
  commentsPageLoadingSelector,
  totalCommentCountSelector,
  commentsPerPageSelector
} from '../../selectors'

class PagedComments extends Component {
  static propTypes = {
    page: PropTypes.number.isRequired
  }

  componentDidMount() {
    this.loadCommentsIfNeeded()
  }

  componentDidUpdate() {
    this.loadCommentsIfNeeded()
  }

  loadCommentsIfNeeded() {
    !this.props.isPageLoaded &&
      !this.props.isPageLoading &&
      this.props.loadComments(this.props.page)
  }

  render() {
    if (this.props.isPageLoading) {
      return <Loader />
    }

    return (
      <div>
        <div>{this.renderComments()}</div>
        <div>{this.renderPager()}</div>
      </div>
    )
  }

  renderComments() {
    return this.props.comments.map(this.renderComment)
  }

  renderComment(comment) {
    return (
      <div>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </div>
    )
  }

  renderPager() {
    const pageCount = Math.ceil(
      this.props.totalCommentCount / this.props.commentsPerPage
    )
    const pageNumbers = []

    for (let page = 1; page <= pageCount; page++) {
      pageNumbers.push(this.renderPageNumber(page))
    }

    return <div>{pageNumbers}</div>
  }

  renderPageNumber(pageNumber) {
    return (
      <NavLink
        key={pageNumber}
        to={`/comments/${pageNumber}`}
        activeStyle={{ color: 'red' }}
      >
        {pageNumber}
      </NavLink>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: commentsPageSelector(state, ownProps.page),
    isPageLoading: commentsPageLoadingSelector(state),
    isPageLoaded: commentsPageLoadedSelector(state, ownProps.page),
    totalCommentCount: totalCommentCountSelector(state),
    commentsPerPage: commentsPerPageSelector(state)
  }
}

export default connect(
  mapStateToProps,
  { loadComments }
)(toggleOpenItem(PagedComments))
