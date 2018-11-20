import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CommentsPage from '../components/comments-page'

export default class CommentsRoute extends Component {
  render = () => (
    <div>
      <Route path="/comments" exact render={this.renderPage} />
      <Route path="/comments/:page" render={this.renderPage} />
    </div>
  )

  renderPage = ({ match }) => {
    let page = match.params.page
    if (!page) {
      page = '1'
    }
    return <CommentsPage page={page} key={page} />
  }
}
