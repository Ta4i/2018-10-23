import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ArticleComment extends Component {
  static propTypes = {
    item: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }
  render() {
    const { item } = this.props

    return (
      <div>
        <section className="test-comment-list-item">
          <h4>{item.user}</h4>
          <h5>{item.text}</h5>
        </section>
      </div>
    )
  }
}
