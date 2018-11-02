import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.shape({
      user: PropTypes.string,
      text: PropTypes.string
    })
  }

  render = () => {
    const { user, text } = this.props.comment
    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}
