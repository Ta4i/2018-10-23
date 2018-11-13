import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default class AddComment extends Component {
  state = {
    isOpened: false,
    user: '',
    text: '',
    validationMessage: ''
  }

  render() {
    const { isOpened, user, text, validationMessage } = this.state
    return (
      <div className="addComment">
        {!isOpened && <button onClick={this.openForm}>add Comment</button>}
        {isOpened && (
          <>
            <div>
              <label>user:</label>
              <input
                type="text"
                value={user}
                onChange={this.handleUserNameInput}
              />
            </div>
            <div>
              <label>comment:</label>
              <textarea value={text} onChange={this.handleCommentTextArea} />
            </div>
            <div>
              <button onClick={this.save}>save</button>
              <button onClick={this.hide}>cancel</button>
            </div>
            <span className="validation">{validationMessage}</span>
          </>
        )}
      </div>
    )
  }

  handleUserNameInput = (event) => {
    const { text, validationMessage } = this.state
    if (validationMessage !== '') {
      this.validate(event.target.value, text)
    }
    this.setState({ user: event.target.value })
  }

  handleCommentTextArea = (event) => {
    const { user, validationMessage } = this.state
    if (validationMessage !== '') {
      this.validate(user, event.target.value)
    }
    this.setState({ text: event.target.value })
  }

  openForm = () => {
    this.setState({ isOpened: true })
  }

  save = () => {
    const { user, text } = this.state
    const { addComment } = this.props
    const validationResult = this.validate(user, text)
    if (validationResult) {
      var id = new Date().getUTCMilliseconds().toString()
      addComment(id, user, text)
      this.hide()
    }
  }

  validate = (user, text) => {
    var message = ''
    if (user === '') {
      message += 'Field user is required. '
    }
    if (text === '') {
      message += 'Field comment is required.'
    }
    this.setState({ validationMessage: message })
    return message === ''
  }

  hide = () => {
    this.setState({
      isOpened: false,
      user: '',
      text: '',
      validationMessage: ''
    })
  }
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired
}
