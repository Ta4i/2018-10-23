import React, { Component } from 'react'
import { Consumer as LangConsumer } from '../../contexts/lang'

export default class UserForm extends Component {
  render() {
    return (
      <form>
        <LangConsumer>
          {(value) => <span>{value.userFormName}</span>}
        </LangConsumer>
        <input value={this.props.value} onChange={this.handleUserNameInput} />
      </form>
    )
  }

  handleUserNameInput = (event) => {
    this.props.onChange(event.target.value)
  }
}
