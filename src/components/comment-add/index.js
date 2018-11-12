import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../ac/index'

class CommentAdd extends Component {
  static propTypes = {}
  state = {
    author: '',
    text: ''
  }
  con
  render() {
    return (
      <div className="commentAdd">
        <br />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="author"
          onChange={this.handleInputChange}
          value={this.state.author}
        />

        <label htmlFor="commentAdd">Your comment:</label>
        <input
          type="text"
          id="commentAdd"
          onChange={this.handleInputChange}
          value={this.state.text}
        />

        <button onClick={this.addNewComment}>Add comment</button>
      </div>
    )
  }

  handleInputChange = (e) => {
    e.preventDefault()
    e.target.id === 'author'
      ? this.setState({ author: e.target.value })
      : this.setState({ text: e.target.value })
  }

  addNewComment = () => {
    const { articleId } = this.props

    const { author, text } = this.state
    this.props.addComment(author, text, articleId)
  }
}

export default connect(
  null,
  { addComment }
)(CommentAdd)
