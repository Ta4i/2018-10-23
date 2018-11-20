import React from 'react'
import CommentsPagination from '../components/comments-pagination'
import { Route } from 'react-router-dom'

function CommentsPage() {
  return <Route path="/comments/:page" render={getCommentsPaginator} />
}

function getCommentsPaginator({ match }) {
  return <CommentsPagination page={match.params.page} />
}

export default CommentsPage
