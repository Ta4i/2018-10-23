import React, { Component } from 'react'

export default class UserForm extends Component {
  render() {
    return (
      <form>
        Username:
        <input value={this.props.value} onChange={this.handleUserNameInput} />
      </form>
    )
  }

  handleUserNameInput = (event) => {
    this.props.onChange(event.target.value)
  }
}
