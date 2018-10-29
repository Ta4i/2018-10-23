import React, { PureComponent } from 'react'

export default class CommentsList extends PureComponent {
  state = {
    isOpenComment: false
  }
  render() {
    const buttonTitle = this.state.isOpenComment
      ? 'close comments'
      : 'open comments'
    return (
      <ul>
        <br />
        <span>-------------------------------</span>
        <div>Comments:</div>
        <span>-------------------------------</span>
        <br />
        <button onClick={this.handleClick}>{buttonTitle}</button>
        <br />
        {this.state.isOpenComment && this.commentsFromArticles}
      </ul>
    )
  }

  handleClick = () => {
    if (this.state.isOpenComment) {
      this.setState({
        isOpenComment: false
      })
    } else {
      this.setState({
        isOpenComment: true
      })
    }
  }

  get commentsFromArticles() {
    if (this.props.comments) {
      return this.props.comments.map((comment) => (
        <li key={comment.id}>
          <h4>{comment.user}</h4>
          <h5>{comment.text}</h5>
        </li>
      ))
    }
  }
}
