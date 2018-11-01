import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      <form>
        Username:
        <input
          value={this.state.username}
          onChange={this.handleUserNameInput}
        />
      </form>
    )
  }

  handleUserNameInput = (event) => {
    if (event.target.value.length > 10) {
      return this.setState({
        username: ''
      })
    }

    this.setState({
      username: event.target.value
    })
  }
}

UserForm.propTypes = {
  handleUserNameInput: PropTypes.func,
  username: PropTypes.string
}
