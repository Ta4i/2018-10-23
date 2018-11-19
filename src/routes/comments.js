import React, { Component } from 'react'
import CommentPage from '../components/comment-page'
import { Route } from 'react-router-dom'
import Loader from '../components/common/loader'

class CommentRoute extends Component {
  render() {
    if (this.props.loading) {
      return <Loader />
    }
    return (
      <div>
        <Route path="/comments" exact render={() => <h2>Comments</h2>} />
        <Route path="/comments/:page" render={this.getCommentPage} />
      </div>
    )
  }

  getCommentPage = ({ match }) => {
    return (
      <CommentPage
        page={JSON.parse(match.params.page)}
        key={match.params.page}
      />
    )
  }
}

export default CommentRoute
