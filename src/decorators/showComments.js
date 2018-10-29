import React, { Component } from 'react'
import Comment from '../components/comment'

export default (OriginalComponent) =>
  class DecoratedComponent extends Component {
    state = {
      openComments: false
    }

    toggleOpenComments = () => {
      this.setState({
        openComments: !this.state.openComments
      })
    }

    get comments() {
      const { article } = this.props
      const { openComments } = this.state

      if (!(openComments && article.comments)) return null
      const comments = article.comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))

      return <div>{comments}</div>
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenComments={this.toggleOpenComments}
          openComments={this.state.openComments}
        >
          {this.comments}
        </OriginalComponent>
      )
    }
  }
