import React, { Component } from 'react'

const MAX_SIZE = 30
const MIN_SIZE = 3

class UserComment extends Component {
  state = {
    user: '',
    text: '',
    isValid: true
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          {this.state.isValid
            ? ''
            : 'Both of fields should contain from 3 to 30 letters'}
        </span>
      </form>
    )
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      user: '',
      text: '',
      isValid: true
    })

    this.checkValidity()

    console.log(this.state)
  }

  handleChange = (field) => (evt) => {
    this.setState({
      [field]: evt.target.value
    })
  }

  checkValidity = () => {
    ;['user', 'text'].forEach(
      (field) =>
        this.state[field].length < MIN_SIZE ||
        this.state[field].length > MAX_SIZE
          ? this.setState({ isValid: false })
          : null
    )
  }
}

export default UserComment
