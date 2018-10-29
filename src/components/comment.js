import React, { Component } from 'react'

export default class ArticleComment extends Component {
  render() {
    const { item } = this.props

    return (
      <div>
        <h4>{item.user}</h4>
        <h5>{item.text}</h5>
      </div>
    )
  }
}
