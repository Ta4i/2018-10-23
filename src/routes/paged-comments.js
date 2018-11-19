import React, { Component } from 'react'
import PagedComments from '../components/paged-comments'
import { Route } from 'react-router-dom'

class PagedCommentsRoute extends Component {
  render() {
    return (
      <div>
        <Route path="/comments/:page" render={this.renderCommentsPage} />
      </div>
    )
  }
  renderCommentsPage = ({ match }) => {
    return <PagedComments page={Number(match.params.page)} />
  }
}

export default PagedCommentsRoute
