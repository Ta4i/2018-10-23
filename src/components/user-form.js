import React, { Component } from 'react'

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
    this.setState({
      username: event.target.value
    })
  }
}
