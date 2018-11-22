import React, { Component } from 'react'

export default class LangForm extends Component {
  render() {
    return (
      <form>
        <label>
          EN{' '}
          <input
            type="radio"
            name="langChanger"
            id="langEN"
            checked={this.props.checkedEN}
            onChange={this.props.handleClick}
          />
        </label>
        <br />
        <label>
          RU{' '}
          <input
            type="radio"
            name="langChanger"
            id="langRU"
            checked={!this.props.checkedEN}
            onChange={this.props.handleClick}
          />
        </label>
      </form>
    )
  }
}
