import React, { Component } from 'react'
import InterContext from '../../contexts/inter'

export default class UserForm extends Component {
  render() {
    return (
      <InterContext.Consumer>
        {({ userName }) => (
          <form>
            {userName}:
            <input
              value={this.props.value}
              onChange={this.handleUserNameInput}
            />
          </form>
        )}
      </InterContext.Consumer>
    )
  }

  handleUserNameInput = (event) => {
    this.props.onChange(event.target.value)
  }
}
