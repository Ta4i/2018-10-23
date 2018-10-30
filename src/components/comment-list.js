import React, { Component } from 'react'

class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { comments } = this.props
    const buttonTitle = this.state.isToggleOn
      ? 'Hide comments'
      : 'Show comments'

    console.log('CommentList renders, comments', comments)

    return (
      <div>
        <button onClick={this.handleClick}>{buttonTitle}</button>
        <ul>{this.comments}</ul>
      </div>
    )
  }

  get comments() {
    if (!this.props.comments) return
    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </li>
    ))
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }))
  }
}

export default CommentList
