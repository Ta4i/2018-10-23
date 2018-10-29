import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { user, text } = this.props
    return (
      <div>
        <h5>{user}</h5>
        {text}
      </div>
    )
  }
}
