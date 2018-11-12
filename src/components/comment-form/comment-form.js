import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as consts from '../../constants'

class CommentForm extends Component {
  state = {
    user: '',
    comment: ''
  }

  render() {
    var formStyle = { width: '20em' }
    var inpStyle = { float: 'right', width: '16em', padding: '0px' }
    var rowStyle = { height: '1.5em' }
    var rowComment = { height: '5em' }
    return (
      <div>
        <form style={formStyle} onSubmit={this.handleAdd}>
          <div style={rowStyle}>
            <label htmlFor="txtUser">User</label>
            <input
              id="txtUser"
              type="text"
              name="user"
              style={inpStyle}
              onChange={this.handleUserChange}
              value={this.state.user}
              required
            />
          </div>
          <div style={rowComment}>
            <label htmlFor="txtComment">
              Comment
              <textarea
                id="txtComment"
                type="textarea"
                name="comment"
                rows="5"
                style={inpStyle}
                onChange={this.handleCommentChange}
                value={this.state.comment}
                required
              />
            </label>
          </div>
          <div style={rowStyle}>
            <button id="btnAdd">Add comment</button>
          </div>
        </form>
      </div>
    )
  }

  handleUserChange = (event) => {
    this.setState({ user: event.target.value, comment: this.state.comment })
  }

  handleCommentChange = (event) => {
    this.setState({ user: this.state.user, comment: event.target.value })
  }

  handleAdd = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: consts.ADD_COMMENT,
      payload: {
        articleId: this.props.articleId,
        user: this.state.user,
        text: this.state.comment
      }
    })
    this.setState({ user: '', comment: '' })
  }
}

export default connect()(CommentForm)
