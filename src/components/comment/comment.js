import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../../selectors'

class Comment extends Component {
  render() {
    const { user, text } = this.props.comment
    return (
      <div>
        <h4>{user}</h4>
        <p>{text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string
  }).isRequired
}

const initMapStateToProps = () => {
  const commentSelector = createCommentSelector()

  return (state, ownProps) => ({
    comment: commentSelector(state, ownProps)
  })
}

export default connect(initMapStateToProps)(Comment)
