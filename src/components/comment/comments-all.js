import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments, changePage } from '../../ac'
import Loader from '../common/loader'
import { NavLink, Route } from 'react-router-dom'

const COMMENTS_PER_PAGE = 5

class AllCommentsList extends Component {
  componentDidMount() {
    this.props.loadAllComments()
  }

  render() {
    // console.log('comments', this.props.filteredComments);

    return (
      <div>
        <button onClick={this.props.loadAllComments}>update comments</button>
        <Route
          path="/comments"
          exact
          render={() => <h2>Please, select the page</h2>}
        />
        <Route path="/comments/:page" render={this.choosePage} />
        <div>{this.pages}</div>
      </div>
    )
  }

  choosePage = ({ match }) => {
    // console.log('PAGE', match.params.page);
    const PAGES_TOTAL =
      this.props.total % COMMENTS_PER_PAGE === 0
        ? this.props.total / COMMENTS_PER_PAGE
        : this.props.total / COMMENTS_PER_PAGE + 1

    if (match.params.page > PAGES_TOTAL && !this.props.loading) {
      return <p>{`This page doesn't exist`}</p>
    } else {
      return <ul>{this.getItems(match.params.page)}</ul>
    }
  }

  getItems(activePage = 1) {
    if (this.props.loading) return <Loader />

    const chosenComments = this.props.allComments.filter(
      (it, ind) =>
        ind <= activePage * COMMENTS_PER_PAGE - 1 &&
        ind >= (activePage - 1) * COMMENTS_PER_PAGE
    )

    return (
      <div>
        {chosenComments.map((it) => (
          <li key={it.id}>
            <p>{it.text}</p>
            <b>{it.user}</b>
          </li>
        ))}
      </div>
    )
  }

  get pages() {
    const pages = []
    const PAGES_TOTAL =
      this.props.total % COMMENTS_PER_PAGE === 0
        ? this.props.total / COMMENTS_PER_PAGE
        : this.props.total / COMMENTS_PER_PAGE + 1

    for (let i = 1; i <= PAGES_TOTAL; i++) {
      pages.push(
        <NavLink key={i} to={`/comments/${i}`} activeStyle={{ color: 'green' }}>
          <button>Page {i}</button>
        </NavLink>
      )
    }

    return <div>{pages}</div>
  }
}

const MapStateToProps = (state) => {
  return {
    allComments: state.allCommentsRecord.get('entities'),
    loading: state.allCommentsRecord.get('loading'),
    total: state.allCommentsRecord.get('total')
  }
}

export default connect(
  MapStateToProps,
  { loadAllComments }
)(AllCommentsList)
