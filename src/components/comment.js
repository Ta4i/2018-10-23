import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { user, text } = this.props

    return (
      <div>
        <div style={{ 'font-weight': 'bold' }}>{user}</div>
        <div>{text}</div>
      </div>
    )
  }
}
