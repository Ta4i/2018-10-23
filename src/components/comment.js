import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    console.log('Comment renders, comment User', this.props.user)

    return (
      <div>
        <h4>{this.props.user}</h4>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
