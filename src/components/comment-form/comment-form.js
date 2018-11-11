import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitComment, setCommentUser, setCommentText } from '../../ac'

class CommentForm extends Component {
  render() {
    return (
      <div>
        <p>Add new comment</p>
        <p>Name:</p>
        <p>
          <input
            type="text"
            onChange={this.handleUserChanged}
            value={this.props.user}
          />
        </p>
        <p>Comment:</p>
        <p>
          <textarea
            cols="100"
            rows="5"
            onChange={this.handleTextChanged}
            value={this.props.text}
          />
        </p>
        <p>
          <button
            onClick={this.handleSubmit}
            disabled={!this.props.submitEnabled}
          >
            submit
          </button>
        </p>
      </div>
    )
  }

  handleUserChanged = (event) => {
    this.props.setCommentUser(event.target.value)
  }

  handleTextChanged = (event) => {
    this.props.setCommentText(event.target.value)
  }

  handleSubmit = () => {
    this.props.submitComment()
  }
}

const mapStateToProps = (state) => ({
  user: state.submittingComment.user,
  text: state.submittingComment.text,
  submitEnabled: state.submittingComment.enabled
})

const mapDispatchToProps = {
  setCommentUser: setCommentUser,
  setCommentText: setCommentText,
  submitComment: submitComment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)
