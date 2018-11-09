import React, { Component } from 'react'
import toggleOpenItem from '../../decorators/toggleOpen'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentForm: {
        name: '',
        text: '',
        articleId: this.props.articleId
      }
    }

    this.handleUserNameInput = this.handleUserNameInput.bind(this)
    this.handleUserTextInput = this.handleUserTextInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    const { toggleOpenItem } = this.props

    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comment-form__btn">
          {'Add comment'}
        </button>
        {this.getBody()}
      </div>
    )
  }
  getBody() {
    const { isOpen } = this.props
    if (!isOpen) return null
    return (
      <div className="test--comment-form__body">
        <form onSubmit={this.handleSubmit}>
          Username:
          <input
            onChange={this.handleUserNameInput}
            value={this.state.commentForm.name}
          />
          Comment text
          <input
            onChange={this.handleUserTextInput}
            value={this.state.commentForm.text}
          />
          <input
            type="submit"
            value="Submit"
            className="test--submit-form__btn"
          />
        </form>
      </div>
    )
  }

  handleUserNameInput = (event) => {
    let commentForm = { ...this.state.commentForm }
    commentForm.name = event.target.value
    this.setState({ commentForm })
  }

  handleUserTextInput = (event) => {
    let commentForm = { ...this.state.commentForm }
    commentForm.text = event.target.value
    this.setState({ commentForm })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatchAddComment(this.state.commentForm)
  }
}

export default connect(
  null,
  { dispatchAddComment: addComment }
)(toggleOpenItem(CommentForm))
