import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'
import './comment-form.css'

class CommentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()

    let comment = {
      user: e.target.commentName.value,
      text: e.target.commentText.value,
      articleId: this.props.articleId
    }

    this.props.dispatchAddComment(comment)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add New Comment</h3>
        <div className="comment__field--group">
          <label className="comment__field--label" htmlFor="commentName">
            Name
          </label>
          <input
            className="comment__field--input"
            id="commentName"
            name="commentName"
            type="text"
            required={true}
          />
        </div>

        <div className="comment__field--group">
          <label className="comment__field--label" htmlFor="commentText">
            Text
          </label>
          <textarea
            className="comment__field--textarea"
            id="commentText"
            name="commentText"
            cols="30"
            rows="10"
            required={true}
          />
        </div>

        <div className="comment__field--group">
          <button className="comment__submit" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    )
  }
}

export default connect(
  null,
  { dispatchAddComment: addComment }
)(CommentForm)