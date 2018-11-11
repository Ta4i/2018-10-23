import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class AddCommentForm extends Component {
  state = {
    user: '',
    text: '',
    canAddComment: false
  }
  render() {
    return (
      <form>
        <div>User:</div>
        <input value={this.state.user} onChange={this.handleUserInput} />
        <div>Text:</div>
        <div>
          <textarea
            value={this.state.text}
            onChange={this.handleTextInput}
            multiple
          />
          <div>
            <button
              onClick={this.handleClick}
              disabled={!this.state.canAddComment}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    )
  }

  handleUserInput = (event) => {
    this.setState({
      user: event.target.value,
      canAddComment: event.target.value.length > 0 && this.state.text.length > 0
    })
  }

  handleTextInput = (event) => {
    this.setState({
      text: event.target.value,
      canAddComment: event.target.value.length > 0 && this.state.user.length > 0
    })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.props.addComment({
      articleId: this.props.articleId,
      user: this.state.user,
      text: this.state.text
    })
  }
}

const mapDispatchToProps = {
  addComment
}

export default connect(
  null,
  mapDispatchToProps
)(AddCommentForm)
