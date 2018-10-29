import React, { PureComponent } from 'react'

export default class Comment extends PureComponent {
  render() {
    const { item } = this.props
    return (
      <div>
        <h3>{item.user}</h3>
        <section>{item.text}</section>
      </div>
    )
  }
}
