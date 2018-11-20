import React, { Component } from 'react'
import CommentPage from '../components/comment-page'
import { COMMENTS_ON_PAGE, COMMENTS_COUNT } from '../constants'
import { Route, NavLink, Switch } from 'react-router-dom'

class CommentPageRoute extends Component {
  getMenu() {
    const pageCount = Math.ceil(COMMENTS_COUNT / COMMENTS_ON_PAGE)
    let a = []
    for (let i = 0; i < pageCount; i++) {
      a.push(i)
    }

    return (
      <div>
        {a.map((i) => {
          let to = '/comments/' + i
          return (
            <span key={`span${i}`}>
              {' '}
              <NavLink key={i} to={to}>
                {i}
              </NavLink>{' '}
            </span>
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div>
        <Route
          path="/comments"
          exact
          render={() => {
            return (
              <div>
                <h2>Please select a comment page</h2>
                {this.getMenu()}
              </div>
            )
          }}
        />
        <Route path="/comments/:num" render={this.getPage} />
      </div>
    )
  }

  getPage = ({ match }) => {
    return (
      <div>
        <br />
        {this.getMenu()}
        <CommentPage num={match.params.num} key={match.params.num} />
      </div>
    )
  }
}

export default CommentPageRoute
