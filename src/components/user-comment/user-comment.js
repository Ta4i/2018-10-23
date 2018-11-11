import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../ac'

const MAX_SIZE = 30
const MIN_SIZE = 3

class UserComment extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <form>
        <label>
          Name:{' '}
          <input
            type="text"
            value={this.state.user}
            onChange={this.handleChange('user')}
          />
        </label>
        <br />
        <label>
          Message:{' '}
          <textarea
            style={{ width: '300px', height: '50px', marginTop: '20px' }}
            value={this.state.text}
            onChange={this.handleChange('text')}
          >
            {' '}
          </textarea>
        </label>
        <br />
        <button
          type="submit"
          style={{ marginTop: '20px' }}
          onClick={this.handleSubmit}
        >
          Send comment
        </button>
        <span style={{ color: 'red' }}>
          {this.checkValidity()
            ? ''
            : 'Both of fields should contain from 3 to 30 letters'}
        </span>
      </form>
    )
  }

  checkValidity = () => {
    let validMarker = 0
    ;['user', 'text'].forEach((field) => {
      if (
        this.state[field].length < MIN_SIZE ||
        this.state[field].length > MAX_SIZE
      ) {
        validMarker++
      }
    })

    return !validMarker
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    if (this.checkValidity()) {
      this.props.addComment(this.state)
      this.setState({
        user: '',
        text: ''
      })
    }

    console.log('submit', this.state)
  }

  handleChange = (field) => (evt) => {
    this.setState({
      [field]: evt.target.value
    })
  }
}

export default connect(
  null,
  (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.currentId))
  })
)(UserComment)
