import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadCommentPage } from '../../ac'
import Loader from '../common/loader'
import { NavLink } from 'react-router-dom'

class CommentPage extends Component {
  componentDidMount() {
    this.props.loadCommentPage(this.props.page - 1)
  }

  render() {
    if (!this.props.loaded) {
      return <Loader />
    }

    return (
      <div>
        {this.pages}
        {this.items}
      </div>
    )
  }

  get pages() {
    var pages = []

    for (var i = 0; i < this.props.numPages; i++) {
      pages.push(
        <NavLink
          key={i}
          activeStyle={{ color: 'red' }}
          to={`/comments/${i + 1}`}
        >
          {i + 1}
        </NavLink>
      )
    }

    return pages
  }

  get items() {
    return this.props.comments.map((item) => (
      <div key={item.id}>
        <h4>{item.user}</h4>
        <p>{item.text}</p>
      </div>
    ))
  }
}

const mapStateToProps = (state, ownProps) => {
  const pageIndex = ownProps.page - 1
  const loaded =
    state.commentPages.total &&
    state.commentPages.entities.get(pageIndex).loaded
  return {
    comments: state.commentPages.total
      ? state.commentPages.entities.get(pageIndex).comments
      : null,
    numPages: state.commentPages.numPages,
    loaded: loaded
  }
}

const mapDispatchToProps = {
  loadCommentPage: loadCommentPage
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentPage)
