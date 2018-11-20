import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  commentsPageTotalCount,
  commentsPageIsLoadingSelector,
  commentsPage
} from '../../selectors'
import { NavLink } from 'react-router-dom'
import './styles.css'
import * as actions from '../../ac'
import Loader from '../common/loader'

class CommentsPage extends Component {
  render = () => {
    const { loading } = this.props
    if (loading) {
      return <Loader />
    } else {
      return this.Content
    }
  }

  componentDidMount() {
    const { loading, loaded, loadCommentsInPage, pageContent } = this.props
    if ((!pageContent.isLoaded || !loaded) && !loading) {
      loadCommentsInPage(pageContent.number)
    }
  }

  get Content() {
    const { loaded } = this.props
    if (!loaded) {
      return null
    }
    return (
      <>
        {this.Comments}
        <ul className="navs">{this.Paging}</ul>
      </>
    )
  }
  get Paging() {
    const { pageCount, pageContent } = this.props
    return [...Array(pageCount).keys()]
      .map((i) => ++i)
      .map((pageNumber) => {
        const route = `/comments/${pageNumber}`
        if (pageNumber == pageContent.number) {
          return (
            <li key={pageNumber}>
              <span to={route}>{pageNumber}</span>
            </li>
          )
        }
        return (
          <li key={pageNumber}>
            <NavLink to={route}>{pageNumber}</NavLink>
          </li>
        )
      })
  }
  get Comments() {
    const { pageContent } = this.props
    if (!pageContent.isLoaded) {
      return null
    }
    return pageContent.comments.map((item) => {
      const { id, user, text } = item
      return (
        <div key={id}>
          <h4>{user}</h4>
          <p>{text}</p>
        </div>
      )
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  const { page } = ownProps
  const { loading, loaded } = commentsPageIsLoadingSelector(state)
  return {
    loading,
    loaded,
    pageCount: commentsPageTotalCount(state),
    pageContent: commentsPage(state, page)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCommentsInPage: (pageNumber) => {
      dispatch(actions.loadCommentsInPage(pageNumber))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsPage)
